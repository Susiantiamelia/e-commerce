<template>
            <nav class="navbar navbar-toggleable-sm navbar-light bg-faded">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">FRONKS</a>
                <div id="navbarNavDropdown" class="navbar-collapse collapse" style="justify-content: flex-end;">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><b>NUT MILKS</b></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><b>ABOUT US</b></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><b>CONTACT US</b></a>
                        </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><b>YOUR ORDER</b></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><b>LOGIN</b></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><b>SIGN UP</b></a>
                    </li>
                </ul>
            </div>
        </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@font-face {
    font-family: Lydian;
    src: url(../assets/fonts/Lydian_BT_Roman.ttf);
}

.navbar-brand{
    margin-left: auto;
    margin-right: auto;
    font-family: Lydian;
    font-size: 35px
}

.navbar-toggler {
    border: 0px !important;
    font-size: 1.15rem !important;
}

.nav-link{
    font-family: 'Karla', sans-serif !important;
    font-size: 14px !important;
}
</style>

