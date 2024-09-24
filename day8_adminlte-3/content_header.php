<?php
$pageTitle = 'Dashboard';
$breadcrumb = 'Dashboard v1';

if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {
        case 'customer_list':
            $pageTitle = 'Customer List';
            $breadcrumb = 'Customer List';
            break;
        case 'customer_edit':
            $pageTitle = 'Customer Edit';
            $breadcrumb = 'Customer Edit';
            break;
        default:
            $pageTitle = 'Dashboard';
            $breadcrumb = 'Dashboard v1';
    }
}
?>

<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0"><?php echo $pageTitle; ?></h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="index.php?page=dashboard">Home</a></li>
                    <li class="breadcrumb-item active"><?php echo $breadcrumb; ?></li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>