<template>
  <div class="text-black">
    <div class="bg-white fixed flex flex-wrap items-center text-center p-16 pin z-50 md:hidden">
      <div>
        <h1 class="text-3xl mb-6 w-full">Type<span class="font-light">Match</span></h1>
        <p>We've not made this tool for mobile, so go head and check it out on your desktop!</p>
      </div>
    </div>

    <nuxt class="hidden md:flex"/>
  </div>
</template>

<style>
/* Stop app overwriting font preference when selecting a font */
@font-face {
  font-family: 'RobotoApp';
  src: url('../assets/fonts/roboto-regular-webfont.woff2') format('woff2'),
    url('../assets/fonts/roboto-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

html {
  font-family: 'RobotoApp', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

input,
select {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: #dae1e7;
  border: 1px solid #dae1e7;
  border-radius: 0.25rem;
  color: #22292f;
  padding: 0.3rem;
  outline: none;
  width: 100%;
}

input:active,
select:active {
  border-color: #38c172;
}

.dropdown {
  position: relative;
}

.dropdown::after {
  background-image: url('../assets/images/arrow-down.svg');
  background-size: 15px 15px;
  content: ' ';
  display: block;
  fill: #22292f;
  position: absolute;
  pointer-events: none;
  top: 7px;
  right: 5px;
  height: 15px;
  width: 15px;
}

.copy-button {
  color: #38c172;
  font-size: 0.875rem;
  position: absolute;
  margin-top: -9px;
  top: 50%;
  right: 10px;
}

.copy-button:active,
.copy-button:focus {
  outline: none;
}
</style>
