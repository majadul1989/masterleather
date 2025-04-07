<template>
    <div>
        <div class="lzd-playground-right">
            <div class="section-title">
                <h2 class="title">Vouchers</h2>
            </div>
            <div class="my-voucher">
                <div class="next-row">
                    <div class="next-col next-col-24">
                        <div class="next-table only-bottom-border">
                            <div class="next-table-inner">
                            <div class="next-table-header">
                                <div class="next-table-header-inner">
                                    <table>
                                        <colgroup>
                                        <col>
                                        <col>
                                        <col style="width: 200px;">
                                        <col>
                                        <col>
                                        <col>
                                        </colgroup>
                                        <tbody>
                                        <tr>
                                            <th rowspan="1" class="next-table-header-node first">
                                                <div class="next-table-cell-wrapper">Active</div>
                                            </th>
                                            <th rowspan="1" class="next-table-header-node">
                                                <div class="next-table-cell-wrapper">Uses</div>
                                            </th>
                                            <th rowspan="1" class="next-table-header-node">
                                                <div class="next-table-cell-wrapper">Voucher Code</div>
                                            </th>
                                            <th rowspan="1" class="next-table-header-node">
                                                <div class="next-table-cell-wrapper">Valid From</div>
                                            </th>
                                            <th rowspan="1" class="next-table-header-node">
                                                <div class="next-table-cell-wrapper">Valid Until</div>
                                            </th>
                                            <th rowspan="1" class="next-table-header-node last">
                                                <div class="next-table-cell-wrapper">Value</div>
                                            </th>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="next-table-body">
                                <table>
                                    <colgroup>
                                        <col>
                                        <col>
                                        <col style="width: 200px;">
                                        <col>
                                        <col>
                                        <col>
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                        <td colspan="6">
                                            <div class="next-table-empty">There are no vouchers yet</div>
                                        </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="next-row footer">
                    <div class="next-col next-col-24">
                        <div class="next-pagination next-pagination-normal next-pagination-arrow-only next-pagination-medium medium">
                            <div class="next-pagination-pages">
                                <button disabled="" type="button" class="next-btn next-btn-normal next-btn-medium next-pagination-item prev">
                                    <i class="icon-left-open"></i>
                                </button>
                                <div class="next-pagination-list">
                                    <button type="button" class="next-btn next-btn-normal next-btn-medium next-pagination-item current">1</button>
                                </div>
                                <button disabled="" type="button" class="next-btn next-btn-normal next-btn-medium next-pagination-item next">
                                    <i class="icon-right-open"></i>
                                </button>
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
    .next-row {
        padding: 0 12px;
    }
    .next-table {
        font-size: 14px;
        line-height: 1.28571;
    }
    .my-voucher .footer {
        margin-top: 16px;
    }
    .next-pagination-pages,
    .next-pagination-item{
        display: inline-block;
    }
    .next-pagination-list {
        display: inline-block;
        margin: 0 4px;
        vertical-align: top;
        
    }
    .next-pagination-item.current{
        background:#0058a3
    }
    .next-pagination-pages button,
    .next-pagination-pages button i{
        color:#fff
    }
</style>
