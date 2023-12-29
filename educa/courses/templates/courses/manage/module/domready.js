const options = {
    method: 'POST',
    mode: 'same-origin'
};
const moduleOrderUrl = '{% url "module_order" %}';
const contentOrderUrl = '{% url "content_order" %}';

const modulesSortable = sortable('#modules', { forcePlaceholderSize: true, placeholderClass: 'placeholder'});
modulesSortable[0].addEventListener('sortupdate', function(e) {
    const modulesOrder = {};
    document.querySelectorAll('#modules li').forEach(function (module, index) {
        // update module index
        modulesOrder[module.dataset.id] = index;
        // update index in HTML element
        module.querySelector('.order').innerHTML = index + 1;
    });
    // add new order to the HTTP request options
    options['body'] = JSON.stringify(modulesOrder);
    // send HTTP request
    fetch(moduleOrderUrl, options);
});

const contentSortable = sortable('#module-contents', { forcePlaceholderSize: true, placeholderClass: 'placeholder'});
contentSortable[0].addEventListener('sortupdate', function(e) {
    const contentOrder = {};
    // Retrieve current ordering
    document.querySelectorAll('#module-contents div').forEach((content, index) => contentOrder[content.dataset.id] = index);
    // add new order to the HTTP request options
    options['body'] = JSON.stringify(contentOrder);
    // send HTTP request
    fetch(contentOrderUrl, options)
});