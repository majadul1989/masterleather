<template>
  <div class="w-100">
    <!-- Visible only on medium (md) and larger screens -->
    <div class="d-none d-md-block">
      <desktop-navbar/>
    </div>

    <!-- Visible only on small (xs) screens -->
    <div class="d-block d-md-none">
      <mobaile-navbar/>
    </div>
  </div>
</template>
