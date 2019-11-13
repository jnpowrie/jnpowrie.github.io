// App in the Air
// https://appintheair.docs.apiary.io/

var AccessToken = "1234";

var request = new XMLHttpRequest();

request.open('GET', 'https://iappintheair.appspot.com/api/v1/me');

request.setRequestHeader("Bearer", AccessToken);

request.onreadystatechange = function () {
	if (this.readyState === 4) {
		console.log('Status:', this.status);
		console.log('Headers:', this.getAllResponseHeaders());
		console.log('Body:', this.responseText);
	}
};

request.send();