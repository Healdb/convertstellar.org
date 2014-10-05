$_GET = array();  
if($_SERVER['REQUEST_METHOD'] == 'GET') {  
    echo parse_str(file_get_contents('php://input'), $_GET);  
}  
