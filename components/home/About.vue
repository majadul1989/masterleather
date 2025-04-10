<template>
    <div class="w-100 row mt-4">
        <div class="col-md-6 col-12 about">
            <img src="@/assets/images/home/about-1.jpeg" alt="Image 1" class="img-fluid" />
            <div class="about-item">
                <div class="about-item-1">
                    <span>Curious About</span>
                    <h2>Our Journey?</h2>
                    <NuxtLink to="/">DISCOVER MORE</NuxtLink>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-12 about">
            <img src="@/assets/images/home/new1.jpeg" alt="Image 1" class="img-fluid" />
            <div class="about-item">
                <div class="about-item-1">
                    <span>Curious About</span>
                    <h2>Our Journey?</h2>
                    <NuxtLink to="/">DISCOVER MORE</NuxtLink>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>

.about{
    position: relative;
    margin-top: 5rem;
}

.about-item{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 1rem;
}

.about-item-1{
    border: 1px solid black;
    padding: 30px;
    border-radius: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.about-item-1 span{
    color: #000;
    font-size: 23px;
    font-weight: 600;
}
.about-item-1 h2{
    color:#df6d27;
    font-size: 34px;
    font-weight: bold;
}
.about-item-1 a{
    margin-top: 1rem;
    padding: 4px 0;
    background-color: #DF6D27;
    font-size: 14px;
    font-weight: 600;
    color: #FFF;
    border: 1px solid #DF6D27;
    border-radius: 20px;
}
.about-item-1 a:hover{
    background: transparent;
    color: black;
}

</style>