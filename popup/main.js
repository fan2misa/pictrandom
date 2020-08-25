document.getElementById("submit").addEventListener('click', (event) => {

    let url = "https://picsum.photos/{width}/{height}"

    let width = document.querySelector('[name="width"]').value;
    let height = document.querySelector('[name="height"]').value;
    let grayscale = document.querySelector('[name="grayscale"]').checked;
    let blur = document.querySelector('[name="blur"]').value;

    url = url
        .replace('\{width\}', width)
        .replace('\{height\}', height);

    let urlParams = new URLSearchParams();

    if (grayscale) {
        urlParams.set('grayscale', 1);
    }

    if (!!blur) {
        urlParams.set('blur', blur);
    }

    url += '?' + urlParams.toString();

    browser.tabs.create({
        url: url
    });
});
