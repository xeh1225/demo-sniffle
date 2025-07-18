<?php
include __DIR__ . '/base/pagebase.php';

class page extends pagebase
{

    var $need_login = false;

    var $page_name = '常见问题解答';

    var $page_tpl = 'faq.html';
    
    function on_load() {
        
        // 标签
        $condition['status'] = 1;
        $where['AND'] = $condition;
        $where['GROUP'] = 'name';
        $res = db::faq_tag()->select(array('name'), $where);
        $this->assign("tags", $res);
        $this->assign("view_type", trim($_GET['view_type']));
    }
}

$page=new page();
$page->run();