var Shopperstop = require('../models/shopperstop'); 

// List of all mazdas
exports.mazda_list = function(req, res) {
    res.send('NOT IMPLEMENTED: mazda list');
};
 
// for a specific shopperstop. 
exports.shopperstop_detail =async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Shopperstop.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Shopperstop create on POST. 
exports.shopperstop_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Shopperstop(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    document.Itemname = req.body.Itemname; 
    document.Quantity = req.body.Quantity; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle shopperstop delete form on DELETE. 
exports.shopperstop_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: shopperstop delete DELETE ' + req.params.id); 
}; 
 
// Handle shopperstop update form on PUT. 
exports.shopperstop_update_put =async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Shopperstop.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Itemname)  
               toUpdate.Itemname = req.body.Itemname; 
        if(req.body.price) toUpdate.price = req.body.price; 
        if(req.body.Quantity) toUpdate.Quantity = req.body.Quantity; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
// List of all Shopperstops 
exports.shopperstop_list = async function(req, res) { 
    try{ 
        theShopperstop = await Shopperstop.find(); 
        res.send(theShopperstop); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
// VIEWS 
// Handle a show all view 
exports.shopperstop_view_all_Page = async function(req, res) { 
    try{ 
        theShopperstops = await Shopperstop.find(); 
        res.render('shopperstop', { title: 'Shopperstop Search Results', results: theShopperstops }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  