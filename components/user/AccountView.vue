<template>
    <div>
        <div class="account_dashborad_wrap">
            <div class="container">
                <div class="lzd-playground-right">
                    <div class="section-title">
                        <h2 class="title">Manage My Account</h2>
                    </div>
                    <div class="dashboard">
                        <div class="dashboard-profile">
                            <div class="dashboard-mod-title">Personal Profile <span>|</span> <a data-spm="dprofile_edit" href="#">EDIT</a></div>
                            <div class="dashboard-info">
                                <div class="dashboard-info-item">{{$store.state.auth.user.name}}</div>
                                <div class="dashboard-info-item"></div>
                                <div class="dashboard-info-item last"><a href="javascript:;">Subscribe to our Newsletter</a></div>
                            </div>
                        </div>
                        <div class="dashboard-address">
                            <div class="dashboard-address-item shipping">
                                <div class="dashboard-mod-title">Address Book <span>|</span> <a href="#" data-spm="dprofile_edit">EDIT</a></div>
                                <div class="dashboard-address-default">DEFAULT SHIPPING ADDRESS</div>
                                <div class="dashboard-address-username">Abdul Alim</div>
                                <div class="dashboard-address-detail">Feni Circuit House</div>
                                <div class="dashboard-address-detail">Chattogram - Feni - Feni Circuit House</div>
                                <div class="dashboard-address-phone">(+880) 1767436576</div>
                            </div>
                            <div class="dashboard-address-item billing">
                                <div class="dashboard-mod-title">Address Book <span>|</span> <a data-spm="dprofile_edit" href="#">EDIT</a></div>
                                <div class="dashboard-address-default">DEFAULT BILLING ADDRESS</div>
                                <div class="dashboard-address-username">Abdul Alim</div>
                                <div class="dashboard-address-detail">Feni Circuit House</div>
                                <div class="dashboard-address-detail">Chattogram - Feni - Feni Circuit House</div>
                                <div class="dashboard-address-phone">(+880) 1767436576</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>