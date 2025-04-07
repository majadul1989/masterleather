<template>
	<div v-if="info" class="having-area">
		<div class="dilie-det_oner">
			<div class="dilie-det_oner-wp">
				<i class="icon-basket"></i>
			</div>
			<div class="dilie-det">
				<div class="sub-site-title">
					<h3>Order By Call:</h3>
				</div>
				<p>01757757235</p>
			</div>
		</div>
		<div class="dilie-det_oner">
			<div class="dilie-det_oner-wp">
				<i class="icon-basket"></i>
			</div>
			<div class="delivery sub-site-title">
				<h3>Delivery Option</h3>
				<p>Area : All over Bangladesh</p>
				<p>Times:<span> 15-20 working days.</span></p>
				<p class="text-muted">Apx. delivery time: 15-20 working days.</p>
			</div>
		</div>
		<div class="dilie-det_oner">
			<div class="dilie-det_oner-wp">
				<i class="icon-basket"></i>
			</div>
			<div class="sub-site-title">
				<h3>Warranty:</h3>
				<p>1 year Service Warranty</p>
			</div>
		</div>
		<div class="dilie-det_oner">
			<div class="dilie-det_oner-wp">
				<i class="icon-basket"></i>
			</div>
			<div class="sub-site-title">
				<h3>Payment Methods:</h3>
				<p>Mobile Banking</p>
				<p>Debit/ Credit card payments</p>
			</div>
		</div>
		<div class="dilie-det_oner">
			<div class="dilie-det_oner-wp">
				<i class="icon-basket"></i>
			</div>
			<div class="sub-site-title sub-site-title_oamsr">
				<h3>Payments security guaranteed:</h3>
				<ul class="list-unstyled">
					<li><img src="https://admin.masterleatherbd.com/public/frontend/images/pay/visa.png" alt=""></li>
					<li><img src="https://admin.masterleatherbd.com/public/frontend/images/pay/rocket.png" alt=""></li>
					<li><img src="https://admin.masterleatherbd.com/public/frontend/images/pay/mastercardd.png" alt=""></li>
					<li><img src="https://admin.masterleatherbd.com/public/frontend/images/pay/islamic-bank--mobile-banking.png" alt=""></li>
					<li><img src="https://admin.masterleatherbd.com/public/frontend/images/pay/islamic-bank--Internet-banking.png" alt=""></li>
					<li><img src="https://admin.masterleatherbd.com/public/frontend/images/pay/IFIC-mobile-banking.png" alt=""></li>
					<li><img src="https://admin.masterleatherbd.com/public/frontend/images/pay/dbbl-nexus.png" alt=""></li>
					<li><img src="https://admin.masterleatherbd.com/public/frontend/images/pay/Bikash.png" alt=""></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    props: {
		info:{
			type: Object,
			default: null
		}
	}
}
</script>

<style>
	.having-area {
		background: #efefef5e;
		border-radius: 5px;
		padding: 0 20px;
		width: 95%;
		float: right;
	}
	.dilie-det_oner {
		display: flex;
		justify-content: left;
		border-bottom: 1px solid #DDD;
		padding: 10px 0;
	}
	.dilie-det_oner-wp i {
		text-align: center;
		margin-top: 0px;
		margin-right: 10px;
		color: #000;
		font-size: 18px;
		display: block;
	}
	.dilie-det p {
		font-weight: bold;
		margin: 0;
		color: #0058a3;
		font-size: 16px;
	}
	.sub-site-title h3 {
		font-weight: 400;
		font-size: 17px;
		color: #ed1530;
		margin: 3px 0;
	}
	.sub-site-title p span {
		font-weight: 500;
		color: #0058a3;
	}
	.sub-site-title p {
		margin: 0;
		padding: 0px 0;
		color: #333;
		font-size: 15px;
		font-weight: 600;
	}
	.having-area .dilie-det_oner:last-of-type .sub-site-title h3 {
		font-size: 14px;
	}
	.sub-site-title_oamsr ul {
		margin-top: 9px;
	}
	.sub-site-title_oamsr ul li {
		display: inline-block;
		margin: 0px 2px;
		background: #FFF;
	}
	.sub-site-title_oamsr ul li img {
		width: 55px;
		display: block;
		border: 1px solid #CCC;
	}
</style>
