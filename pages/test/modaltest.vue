<template>
    <div>
        <div class="section full-height">
            <input class="modal-btn" type="checkbox" id="modal-btn" name="modal-btn" />
            <label for="modal-btn">Open Modal </label>
            
            <div class="modal">
                <div class="modal-wrap">
                    <div class="modal-img-slider">
                        <asl-carousel carousel_container_class="carousel-slides-container" carousel_slides_class="carousel-slides">
                            <div class="modal-img">
                                <img src="https://assets.codepen.io/1462889/sl3.jpg" alt="">
                            </div>
                            <div class="modal-img">
                                <img src="https://assets.codepen.io/1462889/sl3.jpg" alt="">
                            </div>
                            <div class="modal-img">
                                <img src="https://assets.codepen.io/1462889/sl3.jpg" alt="">
                            </div>
                            <div class="modal-img">
                                <img src="https://assets.codepen.io/1462889/sl3.jpg" alt="">
                            </div>
                            <div class="modal-img">
                                <img src="https://assets.codepen.io/1462889/sl3.jpg" alt="">
                            </div>
                        </asl-carousel>
                    </div>
                    <a href="javascript:void(0)" class="modal-close_btn"><i class="icon-cancel"></i></a>
                    <!-- <div class="popup-modals_arrow">
                        <div class="left-arrow">
                            <a href="#"><i class="icon-left-open"></i></a>
                        </div>
                        <div class="right-arrow">
                            <a href="#"><i class="icon-right-open"></i></a>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AslCarousel from '~/components/common/AslCarousel.vue';
export default {
    components: { AslCarousel },
    auth: false,
}
</script>

<style>

    body {
        overflow: hidden;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 101%;
    }
    
    p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.7;
        color: #1f2029;
    }
    
    .section {
        position: relative;
        width: 100%;
        display: block;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-pack: center;
        justify-content: center;
    }
    
    .full-height {
        min-height: 100vh;
    }
    
    [type="checkbox"]:checked,
    [type="checkbox"]:not(:checked) {
        position: absolute;
        left: -9999px;
    }
    
    .modal-btn:checked+label,
    .modal-btn:not(:checked)+label {
        position: relative;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 15px;
        line-height: 2;
        height: 50px;
        transition: all 200ms linear;
        border-radius: 4px;
        width: 240px;
        letter-spacing: 1px;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        -ms-flex-pack: center;
        text-align: center;
        -ms-flex-item-align: center;
        align-self: center;
        border: none;
        cursor: pointer;
        background-color: #102770;
        color: #ffeba7;
        box-shadow: 0 12px 35px 0 rgba(16, 39, 112, .25);
    }
    
    .modal-btn:not(:checked)+label:hover {
        background-color: #ffeba7;
        color: #102770;
    }
    
    .modal-btn:checked+label .uil,
    .modal-btn:not(:checked)+label .uil {
        margin-left: 10px;
        font-size: 18px;
    }
/*     
    .modal-btn:checked+label:after,
    .modal-btn:not(:checked)+label:after {
        position: fixed;
        top: 60px;
        right: 60px;
        z-index: 110;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        line-height: 45px;
        font-size: 18px;
        color: #102770;
        content: '\e800';
      
        transition: all 200ms linear;
        opacity: 0;
        pointer-events: none;
        transform: translateY(20px);
    }
    
    .modal-btn:checked+label:hover:after,
    .modal-btn:not(:checked)+label:hover:after {
        background-color: black;
        color: #ffeba7;
    }
    
    .modal-btn:checked+label:after {
        transition: opacity 300ms 300ms ease, transform 300ms 300ms ease, background-color 250ms linear, color 250ms linear;
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
    } */
    
    .modal {
        position: fixed;
        display: block;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-pack: center;
        justify-content: center;
        margin: 0 auto;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        overflow-x: hidden;
        background-color: rgba(31, 32, 41, .75);
        pointer-events: none;
        opacity: 0;
        transition: opacity 250ms 700ms ease;
    }
    
    .modal-btn:checked~.modal {
        pointer-events: auto;
        opacity: 1;
        transition: all 300ms ease-in-out;
    }
    
    .modal-wrap {
        position: relative;
        display: block;
        border-radius: 4px;
        overflow: hidden;
        padding-bottom: 20px;
        background-color: #fff;
        -ms-flex-item-align: center;
        align-self: center;
        box-shadow: 0 12px 25px 0 rgba(199, 175, 189, .25);
        opacity: 0;
        transform: scale(0.6);
        transition: opacity 250ms 250ms ease, transform 300ms 250ms ease;
        border-radius: 8px;
        width: calc(100% - 4rem);
        height: calc(100% - 4rem);
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .modal-img {
        max-width: 50%;
        margin: auto;
        width:calc(100% * (1 / 1));
        margin-bottom: 30px;
    }
    .modal-wrap img {
        display: block;
        width: 100%;
        height: auto;
    }
    
    .modal-wrap p {
        padding: 20px 30px 0 30px;
    }
    
    .modal-btn:checked~.modal .modal-wrap {
        opacity: 1;
        transform: scale(1);
        transition: opacity 250ms 500ms ease, transform 350ms 500ms ease;
    }
   
    .popup-modals_arrow > div{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
        transition: all .3s ease-in;
    }
    .popup-modals_arrow .left-arrow{
        left: 30px;
    }
    .popup-modals_arrow .right-arrow{
        right: 30px;
    }
    .popup-modals_arrow i{
        color: #fff;
        background: #000;
        font-size: 16px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        display: block;
        border-radius: 50%;
    }
    .popup-modals_arrow i:hover{
        background: rgba(0, 0, 0, 0.801);
    }
    .modal-wrap:hover .popup-modals_arrow>div{
        opacity: 1;
    }
    .modal-img-slider{
        padding: 0 6.25rem;
    }
    .modal-img-slider .asl-carousel-container .carousel-slides{
        width: 50%;
        margin:auto;
        height: 75vh;
    }
    .modal-close_btn {
        position: absolute;
        top: 30px;
        right: 30px;
        display: block;
    }
    .modal-close_btn i{
        z-index: 110;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        line-height: 45px;
        font-size: 20px;
    }
    @media screen and (max-width: 500px) {
        .modal-wrap {
            width: calc(100% - 40px);
            padding-bottom: 15px;
        }
        .modal-wrap p {
            padding: 15px 20px 0 20px;
        }
    }
</style>