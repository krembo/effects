var kui = kui || {
	fx : {}
};
kui.fx.hoverWave = function (element, hoverColor) {
	var letters = element.textContent.split(''),
	lettersHtml = '',
	j = 0,
	baseColor = window.getComputedStyle(element, null).getPropertyValue('color'),
	hoverColor = hoverColor || 'green',
	mouseOver = function () {
		var list = element.querySelectorAll('.ef-letter');
		for (j = 0; j < list.length; j++) {
			list[j].style.transition = 'color ' + (j * 0.05) + 's';
			list[j].style.color = hoverColor;
		}
	},
	mouseLeave = function () {
		var list = element.querySelectorAll('.ef-letter');
		for (j = 0; j < list.length; j++) {
			list[j].style.transition = 'color ' + (j * 0.05) + 's';
			list[j].style.color = baseColor;
		}
	};
	for (var i in letters) {
		lettersHtml += '<span class="ef-letter">' + letters[i] + '</span>';
	}
	element.innerHTML = lettersHtml;
	element.addEventListener('mouseover', mouseOver, false);
	element.addEventListener('mouseleave', mouseLeave, false);
};