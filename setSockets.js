var script = document.createElement('script');
script.innerHTML= "function setSocket() {this.socket  = io('https://pricenotifications.herokuapp.com/'); setInterval(function() {var sendInfo = {}; jQuery('div.coin').children('b').each(function(){var currency = jQuery(this).text().split(':')[0];if(currency==='XRP/INR'){ sendInfo.ripple = {price: jQuery(this).text().split(':')[1].trim(), currency: 'ripple'};}if(currency==='ETH/INR'){ sendInfo.ether = {price: jQuery(this).text().split(':')[1].trim(), currency: 'ether'};} });console.log('sendInfo ', sendInfo); socket.emit('sendPrices', sendInfo);}, 6000);} console.log('running')";
document.body.appendChild(script);

var script = document.createElement('script');
script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js');
script.setAttribute('onload', 'setSocket()');
document.getElementsByTagName('head')[0].appendChild(script);

setTimeout(function(){
    location = ''
}, 60000)