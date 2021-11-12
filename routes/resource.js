var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../contorllers/api'); 
var shopperstop_controller = require('../contorllers/shopperstop'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// SHOPPERSTOP ROUTES /// 
 
// POST request for creating a Shopperstop.  
router.post('/resource/shopperstops', shopperstop_controller.shopperstop_create_post); 
 
// DELETE request to delete Shopperstop. 
router.delete('/resource/shopperstops/:id', shopperstop_controller.shopperstop_delete); 
 
// PUT request to update Shopperstop. 
router.put('/resource/shopperstops/:id', 
shopperstop_controller.shopperstop_update_put); 
 
// GET request for one Shopperstop. 
router.get('/resource/shopperstops/:id', shopperstop_controller.shopperstop_detail); 
 
// GET request for list of all Shopperstop items. 
router.get('/resource/shopperstops', shopperstop_controller.shopperstop_list); 
 
module.exports = router;