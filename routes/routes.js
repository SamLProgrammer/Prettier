const {Router} = require('express');
const router = Router();
const {formatCode} = require('../controllers/monitor');

router.post('/formatCode', formatCode);
// router.post('/loadUpDB', receiveDB);
// router.get('/queryAccountsData', facadeQueryAccounts);
// router.get('/queryAccountAssetsData', facadeQueryAccountAssets);
// router.get('/queryContactsData', facadeQueryContacts);
// router.get('/queryOppsData', facadeQueryOpportunities);
// router.get('/queryConPicklists', facadeQueryContactPicklists);
// router.get('/queryAccPicklists', facadeQueryAccountPicklists);
// router.get('/queryOppPicklists', facadeQueryOppPicklists);
// router.get('/getMappingFiles', facadeGetMappingFiles);
// router.post('/getRecords', getRecords);
// router.post('/getCsvFile', getCSVFile);
// router.post('/insertMassAccountRecords', facadeInsertMassAccountRecords);
// router.get('/', homeLanding);

module.exports = router;