
sprint_editor.registerBlock(
    'my_blocks__info',
    function ($, $el, data) {
      const areas = [
        {
          dataKey: 'cardHeader',
          blockName: 'htag',
          container: '.card-header',
        },
        {
          dataKey: 'cardText',
          blockName: 'text',
          container: '.card-text',
        },
        {
          dataKey: 'card-title-1',
          blockName: 'htag',
          container: '.card-title-1',
        },
        {
          dataKey: 'card-desc-1',
          blockName: 'text',
          container: '.card-desc-1',
        },
        {
          dataKey: 'card-title-2',
          blockName: 'htag',
          container: '.card-title-2',
        },
        {
          dataKey: 'card-desc-2',
          blockName: 'text',
          container: '.card-desc-2',
        },{
          dataKey: 'card-title-3',
          blockName: 'htag',
          container: '.card-title-3',
        },
        {
          dataKey: 'card-desc-3',
          blockName: 'text',
          container: '.card-desc-3',
        },{
          dataKey: 'card-title-4',
          blockName: 'htag',
          container: '.card-title-4',
        },
        {
          dataKey: 'card-desc-4',
          blockName: 'text',
          container: '.card-desc-4',
        },{
          dataKey: 'card-title-5',
          blockName: 'htag',
          container: '.card-title-5',
        },
        {
          dataKey: 'card-desc-5',
          blockName: 'text',
          container: '.card-desc-5',
        },{
          dataKey: 'card-title-6',
          blockName: 'htag',
          container: '.card-title-6',
        },
        {
          dataKey: 'card-desc-6',
          blockName: 'text',
          container: '.card-desc-6',
        },
      ];
  
      this.getData = function () {
        return data;
      };
  
      this.collectData = function () {
        return data;
      };
  
      this.getAreas = function () {
        return areas;
      };
    },
  );