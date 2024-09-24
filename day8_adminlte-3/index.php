<!DOCTYPE html>
<html lang="en">

<?php include "header.php" ?>

<body class="hold-transition sidebar-mini layout-fixed">
  <div class="wrapper">

    <!-- Preloader -->
    <?php include "preloader.php" ?>

    <!-- Navbar -->
    <?php include "navbar.php" ?>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <?php include "logo.php" ?>

      <!-- Sidebar -->
      <?php include "sidebar.php" ?>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <?php include "content_header.php" ?>
      <!-- /.content-header -->

      <!-- Main content -->
      <?php 
      // Mengambil parameter page dari URL dan memuat file yang sesuai
      if (isset($_GET['page'])) {
          $page = $_GET['page'];
          if ($page == 'dashboard') {
              include 'dashboard.php';
          } elseif ($page == 'customer_list') {
              include 'customer_list.php';
          } elseif ($page == 'customer_edit' && isset($_GET['id'])) {
              include 'customer_edit.php';
          } else {
              echo "<h3>Page not found</h3>";
          }
      } else {
          include 'dashboard.php';
      }
      ?>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <?php include "footer.php" ?>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
  <!-- ./wrapper -->
</body>

</html>
