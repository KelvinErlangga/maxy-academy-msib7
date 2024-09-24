<div class="sidebar">
  <!-- Sidebar user panel (optional) -->
  <div class="user-panel mt-3 pb-3 mb-3 d-flex">
    <div class="image">
      <img src="me2.jpg" class="img-circle elevation-2" alt="User Image">
    </div>
    <div class="info">
      <a href="index.php?page=dashboard" class="d-block">Kelvin Erlangga</a>
    </div>
  </div>

  <!-- Sidebar Menu -->
  <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      <!-- Add icons to the links using the .nav-icon class with font-awesome or any other icon font library -->
      <li class="nav-item">
        <a href="index.php?page=dashboard" class="nav-link <?php echo (!isset($_GET['page']) || $_GET['page'] == 'dashboard') ? 'active' : ''; ?>">
          <i class="nav-icon fas fa-tachometer-alt"></i>
          <p>Dashboard</p>
        </a>
      </li>
      <li class="nav-item menu-open">
        <a href="#" class="nav-link <?php echo (isset($_GET['page']) && ($_GET['page'] == 'customer_list' || $_GET['page'] == 'customer_edit')) ? 'active' : ''; ?>">
          <i class="nav-icon fas fa-th"></i>
          <p>
            Tugas Day 8
            <i class="right fas fa-angle-left"></i>
          </p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item">
            <a href="index.php?page=customer_list" class="nav-link <?php echo (isset($_GET['page']) && $_GET['page'] == 'customer_list') ? 'active' : ''; ?>">
              <i class="far fa-circle nav-icon"></i>
              <p>Customer List</p>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
  <!-- /.sidebar-menu -->
</div>
