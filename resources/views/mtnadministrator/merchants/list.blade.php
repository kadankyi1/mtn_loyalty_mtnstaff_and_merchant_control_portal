<?php
$active_page = "Merchants";
?>
<!-- INCLUDING THE FILE THAT HOLDS THE CORE STRUCTURE OF THE PAGE -->
@extends('app')

<!-- INCLUDING CUSTOM SCRIPTS AND STYLES -->
@section('top_scripts_and_styles')
    <link rel="stylesheet" href="/css/custom.css">
    <script src="/js/custom/config.js"></script>
    <script src="/js/custom/auth.js"></script>
@endsection()

@section('main_content_and_footer')
            <!-- Main Content Area -->
            <div class="main-content">
                <div class="data-table-area">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12 mb-30">
                                <div class="card">
                                    <div class="card-body">
                                        <h6 class="card-title">Merchants</h6>
                                        <div class="d-flex justify-content-center">
                                            <div id="loader" class="customloader" style="display: none;"></div>
                                        </div> 
                                        <div class="table-responsive">
                                            <table id="dataTableExample" class="table">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Username</th>
                                                        <th>Email</th>
                                                        <th>Points</th>
                                                        <th>Status</th>
                                                        <th>Last Login</th>
                                                        <th>Creation</th>
                                                        <th>Update</th>
                                                        <th>Deletion</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="table_body_list">
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            <!-- Footer Area -->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <!-- Footer Area -->
                        <footer class="footer-area d-sm-flex justify-content-center align-items-center justify-content-between">
                            <!-- Copywrite Text -->
                            <div class="copywrite-text">
                                <p>Created by @<a href="#">Antina</a></p>
                            </div>
                            <div class="fotter-icon text-center">
                                <a href="#" class="action-item mr-2" data-toggle="tooltip" title="Facebook">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="#" class="action-item mr-2" data-toggle="tooltip" title="Twitter">
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="#" class="action-item mr-2" data-toggle="tooltip" title="Pinterest">
                                    <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                                </a>
                                <a href="#" class="action-item mr-2" data-toggle="tooltip" title="Instagram">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>

@endsection

@section('bottom_scripts')
    

<script src="/js/core.js"></script>
<script src="/js/bundle.js"></script>

<!-- Inject JS -->
<script src="/js/default-assets/setting.js"></script>
<script src="/js/default-assets/active.js"></script>

<!-- Custom js -->
<script src="js/default-assets/demo.datatable-init.js"></script>

<!-- CUSTOMJS -->
<script src="/js/custom/merchants/merchants.js"></script>
<script type="text/javascript">
    get_merchants_for_page('<?php if(isset($_GET["page"]) && intval($_GET["page"]) > 0){echo intval($_GET["page"]);} else {echo "1"; } ?>');
  </script>

@endsection