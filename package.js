Package.describe({
    summary: "Bootstrap LESS",
    version: "0.0.2",
    name:    "longuniquename:bootstrap",
    git:     'https://github.com/dmitriyles/meteor-bootstrap-less.git'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0');

    api.use([
        'jquery'
    ], 'client');

    api.imply('less');

    //JS
    api.addFiles([
        'js/transition.js',
        'js/alert.js',
        'js/button.js',
        'js/carousel.js',
        'js/collapse.js',
        'js/dropdown.js',
        'js/modal.js',
        'js/tooltip.js',
        'js/popover.js',
        'js/scrollspy.js',
        'js/tab.js',
        'js/affix.js'
    ], 'client');

    //FONTS
    api.addFiles([
        'fonts/glyphicons-halflings-regular.eot',
        'fonts/glyphicons-halflings-regular.svg',
        'fonts/glyphicons-halflings-regular.ttf',
        'fonts/glyphicons-halflings-regular.woff',
        'fonts/glyphicons-halflings-regular.woff2'
    ], 'client');

    //LESS
    api.addFiles([
        'less/mixins/alerts.import.less',
        'less/mixins/clearfix.import.less',
        'less/mixins/hide-text.import.less',
        'less/mixins/nav-vertical-align.import.less',
        'less/mixins/reset-filter.import.less',
        'less/mixins/table-row.import.less',
        'less/mixins/background-variant.import.less',
        'less/mixins/forms.import.less',
        'less/mixins/image.import.less',
        'less/mixins/opacity.import.less',
        'less/mixins/resize.import.less',
        'less/mixins/text-emphasis.import.less',
        'less/mixins/border-radius.import.less',
        'less/mixins/gradients.import.less',
        'less/mixins/labels.import.less',
        'less/mixins/pagination.import.less',
        'less/mixins/responsive-visibility.import.less',
        'less/mixins/text-overflow.import.less',
        'less/mixins/buttons.import.less',
        'less/mixins/grid-framework.import.less',
        'less/mixins/list-group.import.less',
        'less/mixins/panels.import.less',
        'less/mixins/size.import.less',
        'less/mixins/vendor-prefixes.import.less',
        'less/mixins/center-block.import.less',
        'less/mixins/grid.import.less',
        'less/mixins/nav-divider.import.less',
        'less/mixins/progress-bar.import.less',
        'less/mixins/tab-focus.import.less',
        'less/alerts.import.less',
        'less/carousel.import.less',
        'less/glyphicons.import.less',
        'less/media.import.less',
        'less/normalize.import.less',
        'less/progress-bars.import.less',
        'less/thumbnails.import.less',
        'less/badges.import.less',
        'less/close.import.less',
        'less/grid.import.less',
        'less/pager.import.less',
        'less/responsive-embed.import.less',
        'less/tooltip.import.less',
        'less/bootstrap.import.less',
        'less/code.import.less',
        'less/input-groups.import.less',
        'less/mixins.import.less',
        'less/pagination.import.less',
        'less/responsive-utilities.import.less',
        'less/type.import.less',
        'less/breadcrumbs.import.less',
        'less/component-animations.import.less',
        'less/jumbotron.import.less',
        'less/modals.import.less',
        'less/panels.import.less',
        'less/scaffolding.import.less',
        'less/utilities.import.less',
        'less/button-groups.import.less',
        'less/dropdowns.import.less',
        'less/labels.import.less',
        'less/navbar.import.less',
        'less/popovers.import.less',
        'less/tables.import.less',
        'less/variables.import.less',
        'less/buttons.import.less',
        'less/forms.import.less',
        'less/list-group.import.less',
        'less/navs.import.less',
        'less/print.import.less',
        'less/theme.import.less',
        'less/wells.import.less'
    ], 'client');

});
