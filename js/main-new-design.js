function formatState (state) {
  if (!state.id) { return state.text; }
  var $state = $(
    '<span><img src="img/country/' +  state.element.value.toLowerCase() +
    '.png" class="img-flag" /> ' +
    state.text +     '</span>'
    );
  return $state;
};

function formatState2 (state) {
  if (!state.id) { return state.text; }
  var $state = $(
    '<span><img src="img/selected_icon/' +  state.element.dataset.icon +
    '.png" class="img-flag" /> ' +
    state.text +     '</span>'
    );
  return $state;
};
function formatStateCircle (state) {
  if (state.id == 1) {
    return $(
      '<span><span class="round enabled"></span>' +
      state.text + '</span>'
      );
  }
  if (state.id == 2) {
    return $(
      '<span><span class="round paused"></span>' +
      state.text + '</span>'
      );
  }
  if (state.id == 3) {
    return $(
      '<span><span class="round archived"></span>' +
      state.text + '</span>'
      );
  }
};

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();

  $('.table-edited-value input').on('focus', function() {
    $(this).parent().after('<div class="table-edited-value-holder"></div>');
    $(this).parent().addClass('active');
  });

  $('.table-edited-value button').on('focus', function() {
    $(this).parent().removeClass('active');
  });

  $('.js-example-basic-single.state').select2({
    dropdownAutoWidth: 1,
    minimumResultsForSearch: -1,
    templateResult: formatStateCircle
  });
  //

  $('.js-example-basic-single.table').select2({
    dropdownAutoWidth: 1,
    minimumResultsForSearch: -1
  });
  $('.js-example-basic-single.flag').select2({
    minimumResultsForSearch: -1,
    templateResult: formatState
  });
  $('.js-example-basic-single.currency').select2({
    minimumResultsForSearch: -1
  });

  $('.js-example-basic-single.length').select2({
    minimumResultsForSearch: -1
  });
  $('.fast-date').select2({
    minimumResultsForSearch: -1
  });
  $('.js-example-basic-multiple.length').select2({
    minimumResultsForSearch: -1,
    containerCssClass: 'multiple'
  });
  $('.js-example-basic-single.actions').select2({
    minimumResultsForSearch: -1,
    templateResult: formatState2,
    dropdownCssClass: 'icons'
  });



  // DataTabless
  var table1  = $('#example').DataTable( {
    "dom": 'prtp',
    'order': [[ 2, "asc" ]],
    "pagingType": 'simple_numbers',
    "columnDefs":  [{
      "targets": [0, 1, 7, 17],
      "orderable": false,
      'className': 'pl-1'
    },
    {
      "targets": [1],
      'className': 'px-0'
    },
    {
      "targets": [2],
      'className': 'pl-0'
    },
    {
      "targets": [3],
      'className': 'pl-1 pr-0'
    },{
      "targets": [6,7,8,9,10,11,12,13,14,15,16],
      'className': 'pl-1 pr-1'
    },{
      "targets": [3],
      'className': 'pl-1 pr-0'

    }]

  } );


    var table1  = $('#example1').DataTable( {
        "dom": 'prtp',
        'order': [[ 2, "asc" ]],
        "pagingType": 'simple_numbers',
        "columnDefs":  [{
            "targets": [0, 1, 5, 6, 7, 8, 18],
            "orderable": false,
            'className': 'pl-1'
        },
            {
                "targets": [1],
                'className': 'px-0'
            },
            {
                "targets": [2],
                'className': 'pl-0'
            },
            {
                "targets": [3],
                'className': 'pl-1 pr-0'
            },{
                "targets": [6,7,8,9,10,11,12,13,14,15,16],
                'className': 'pl-1 pr-1'
            },{
                "targets": [3],
                'className': 'pl-1 pr-0'
            }]

    } );

    var table1  = $('#example3').DataTable( {
        // "dom": 'prtp',
        'order': [[ 2, "asc" ]],
        "pagingType": 'simple_numbers',
        "columnDefs":  [{
            "orderable": false,
            'className': 'pl-1'
        },
            {
                "targets": [1],
                'className': 'px-0'
            },
            {
                "targets": [2],
                'className': 'pl-0'
            },
            {
                "targets": [3],
                'className': 'pl-1 pr-0'
            },{
                "targets": [6,7,8,9,10,11,12],
                'className': 'pl-1 pr-1'
            },{
                "targets": [3],
                'className': 'pl-1 pr-0'

            }]
    } );

    var table1  = $('#example4').DataTable( {
        "dom": 'prtp',
        'order': [[ 2, "asc" ]],
        "pagingType": 'simple_numbers',
        "columnDefs":  [{
            "targets": [0],
            "orderable": false,
            'className': 'pl-1'
        },
            {
                "targets": [1],
                'className': 'px-0'
            },
            {
                "targets": [2],
                'className': 'pl-0'
            },
            {
                "targets": [3],
                'className': 'pl-1 pr-0'
            },{
                "targets": [4],
                'className': 'pl-1 pr-1'
            },{
                "targets": [3],
                'className': 'pl-1 pr-0'

            }]
    } );
    var table1  = $('#example5').DataTable( {
        "dom": 'prtp',
        'order': [[ 2, "asc" ]],
        "pagingType": 'simple_numbers',
        "columnDefs":  [{
            "targets": [0],
            "orderable": false,
            'className': 'pl-1'
        },
            {
                "targets": [1],
                'className': 'px-0'
            },
            {
                "targets": [2],
                'className': 'pl-0'
            },
            {
                "targets": [3],
                'className': 'pl-1 pr-0'
            },{
                "targets": [4,5,6],
                'className': 'pl-1 pr-1'
            },{
                "targets": [3],
                'className': 'pl-1 pr-0'

            }]
    } );
    var table1  = $('#example6').DataTable( {
        "dom": 'prtp',
        'order': [[ 2, "asc" ]],
        "pagingType": 'simple_numbers',
        "columnDefs":  [{
            "targets": [0],
            "orderable": false,
            'className': 'pl-1'
        },
            {
                "targets": [1],
                'className': 'px-0'
            },
            {
                "targets": [2],
                'className': 'pl-0'
            },
            {
                "targets": [3],
                'className': 'pl-1 pr-0'
            },{
                "targets": [4,5,6],
                'className': 'pl-1 pr-1'
            },{
                "targets": [3],
                'className': 'pl-1 pr-0'

            }]
    } );

    var table2  = $('#filter-compaigns1').DataTable( {
        // "dom": 'prtp',
        'order': [[ 2, "asc" ]],
        "pagingType": 'simple_numbers',
        "columnDefs":  [{
            "targets": [2],
            'className': 'pl-1 pr-0'
        }]
    });

    var table3  = $('#filter-compaigns2').DataTable( {
        // "dom": 'prtp',
        'order': [[ 1, "asc" ]],
        "pagingType": 'simple_numbers',
        "columnDefs":  [{
            "targets": [1],
            'className': 'pl-1 pr-0'
        }]
    });
    var table2  = $('#filter-compaigns3').DataTable( {
        // "dom": 'prtp',
        'order': [[ 2, "asc" ]],
        "pagingType": 'simple_numbers',
        "columnDefs":  [{
            "targets": [2],
            'className': 'pl-1 pr-0'
        }]
    });

    $('.dataTables_filter input').attr("placeholder", "search");

  $('.visible-container label').on( 'click', function (e) {
    var val = $(this).prev().attr('id').slice(11);
    val = parseInt(val) + 1;
    var column = table1.column( val );
    console.log($(this).prev().attr('id').slice(11));
    column.visible( ! column.visible() );

  } );

  $('[data-change-legth1]').on( 'change', function () {
    var value = $(this).val()
    table1.page.len( value ).draw();
  } );

  $('[data-search-table-main]').on( 'keyup', function () {
    var value = $(this).val()
    table1.search( value ).draw();
  } );

  $('[data-change-legth3]').on( 'change', function () {
    var value = $(this).val()
    table3.page.len( value ).draw();
  } );

  $('[data-search-campaigns-filter-right]').on( 'keyup', function () {
    var value = $(this).val()
    table3.search( value ).draw();
  } );

  $('[data-change-legth2]').on( 'change', function () {
    var value = $(this).val()
    table2.page.len( value ).draw();
  } );

  $('[data-search-campaigns-filter-left]').on( 'keyup', function () {
    var value = $(this).val()
    table2.search( value ).draw();
  } );

  //datapicker
  $('#datePicker2').daterangepicker({
    "ranges": {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    "linkedCalendars": false,
    "locale": {
      "format": "MMM D, YYYY",
      "separator": " - ",
      "applyLabel": "Apply",
      "cancelLabel": "Cancel",
      "fromLabel": "From",
      "toLabel": "To",
      "customRangeLabel": "Custom",
      "weekLabel": "W",
      "daysOfWeek": [
      "Su",
      "Mo",
      "Tu",
      "We",
      "Th",
      "Fr",
      "Sa"
      ],
      "monthNames": [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
      ],
      "firstDay": 1
    },
    "alwaysShowCalendars": true,
    //"startDate": "01/27/2018",
    //"endDate": "02/02/2018",
    "opens": "left"
  }, function(start, end, label) {
    console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
  });

  //ui helper
  $( ".search" ).on('keyup', function() {
    var input = $(this)
    var val = input.val();
    val.length > 0 && val != "Default text" ? input.addClass('active') : input.removeClass('active')
    var hasClass = input.hasClass("active")
  });

  $('[data-search-table-main] + .search-close').on('click', function() {
    table1.search( '' ).draw();
    $(this).prev().val('').removeClass('active');
  })

  $('[data-search-campaigns-filter-left] + .search-close').on('click', function() {
    table2.search( '' ).draw();
    $(this).prev().val('').removeClass('active');
  })

  $('[data-search-campaigns-filter-right] + .search-close').on('click', function() {
    table3.search( '' ).draw();
    $(this).prev().val('').removeClass('active');
  })

  $('.datepicker').on('click', function() {
    $(this).toggleClass('active')
  })

  $('.datepicker').on('hide.daterangepicker', function() {
    $(this).toggleClass('active');
  })

  $('.visible').on('click', function() {
    $(this).toggleClass('active')
    $('.visible-container').toggleClass('active')
  })

  //campaigns
  $('[data-filter-campaigns-btn]').on('click', function () {
    $(this).toggleClass('active')
    $('[data-campaigns-filter-container]').toggleClass('active')
  })

  $('[data-filter-btn]').on('click', function () {
    $(this).toggleClass('active')
    $('[data-filter-container]').toggleClass('active')
  })

  $('[data-campaigns-filter-container] .close').on('click', function() {
    $('[data-filter-campaigns-btn]').toggleClass('active')
    $(this).parents('[data-campaigns-filter-container]').toggleClass('active')
  })

  $('[data-filter-container] .close').on('click', function() {
    $('[data-filter-btn]').toggleClass('active')
    $(this).parents('[data-filter-container]').toggleClass('active')
  })

  $('.wrapper_searchterms').css({opacity: 1})

    $('.js-example-basic-multiple').select2();
});

 //------------tabs-------//
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
$(".chosen-select").chosen({max_selected_options: 5});

let data = [
    'Історія україни',
    'Історія мистецтва',
    'Приклад три',
    'Приклад чотири',
    'Приклад П’ять'
];

$('#autocomplete').autocomplete({
    source: data
});
$('#autocomplete1').autocomplete({
    source: data
});

$(document).ready(function () {
    $('.user-btn').click(function () {
        $(this).toggleClass('open-user-block');
    });
    $(document).mouseup(function (e) {
        if ($(e.target).closest(".open-user-block").length > 0 || $(e.target).hasClass('user-btn')) {
            return false;
        }
        else {
            $('.user-btn').removeClass('open-user-block');
        }
    });
      $('.market-btn').click(function () {
        $(this).toggleClass('open-market-block');
    });
    $(document).mouseup(function (e) {
        if ($(e.target).closest(".open-market-block").length > 0 || $(e.target).hasClass('market-btn')) {
            return false;
        }
        else {
            $('.market-btn').removeClass('open-market-block');
        }
    });
});



var opinions = [{"id":47,"name":"E061140","fileName":null,"disposition":null,"summary":null,"title":"Marr. of Eustice","opinionDate":"2015-12-10"},{"id":48,"name":"C070296M","fileName":null,"disposition":null,"summary":null,"title":"P. v. Nilsson","opinionDate":"2015-12-10"},{"id":50,"name":"S209643","fileName":null,"disposition":null,"summary":null,"title":"P. v. Stevens","opinionDate":"2015-12-10"}];
var sections = [{"code":"code of civil procedure","sectionNumber":{"position":-1,"sectionNumber":"177.5"},"refCount":2,"section":{"part":"Chapter","partNumber":"4","title":"Incidental Powers and Duties of Judicial Officers","codeRange":{"sNumber":{"position":168,"sectionNumber":"177"},"eNumber":{"position":171,"sectionNumber":"179"}},"depth":3}},{"code":"code of civil procedure","sectionNumber":{"position":-1,"sectionNumber":"580"},"refCount":16,"section":{"part":"Chapter","partNumber":"1","title":"Judgment in General","codeRange":{"sNumber":{"position":862,"sectionNumber":"577"},"eNumber":{"position":879,"sectionNumber":"582.5"}},"depth":3}}];

function format ( table_id ) {
    return '<table class="display new-display" id="example2'+table_id+'">'+
        '<thead class="new-thead"><tr><th></th><th>State</th><th class="width-details">AdGroup</th><th>Revenue</th><th>Spend</th><th>AcoS, $</th><th>CTR</th><th>Orders</th><th>Impressions</th></tr></thead>'+
    '<tbody class="tr-style">'+
    '<tr>'+
    '<td></td>'+
    '<td><div class="table-paragraph"><p>enabled</p></div></td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>Narrow - Phrase</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>293.88</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>31.15</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>31.15</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>0.15</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>8</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>28375</p>'+
        '</div>'+
        '</td>'+
        '</tr>'+
        '<tr>'+
        '<td></td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>enabled</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>KillBRD 21/08/2017 - Narrow - Broad</p>'+
    '</div>'+
    '</td>'+
    '<td>'+
    '<div class="table-paragraph">'+
        '<p>1087.35</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>105.59</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>105.59</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>0.59</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>33</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>28375</p>'+
        '</div>'+
        '</td>'+
        '</tr>'+
        '<tr>'+
        '<td></td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>enabled</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>Narrow - Exact</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>224.94</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>30.20</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>30.20</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>0.20</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>8</p>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div class="table-paragraph">'+
        '<p>28375</p>'+
        '</div>'+
        '</td>'+
        '</tr>'+
        '</tbody>'+
        '</table>';
}
var iTableCounter=1;
var oInnerTable;

$(document).ready(function() {
    TableHtml = $('#example2').html();

    var table  = $('#example2').DataTable( {
        // "dom": 'prtp',
        "language": {
            "info": "1 of 20 (total 1134)",
        },
        'order': [[ 2, "asc" ]],
        "pagingType": 'simple_numbers',
        "columnDefs":  [{
            "targets": [0, 1, 7],
            "orderable": false,
            'className': 'pl-1'
        },
            {
                "targets": [1],
                'className': 'px-0'
            },
            {
                "targets": [2],
                'className': 'pl-0'
            },
            {
                "targets": [3],
                'className': 'pl-1 pr-0'
            },{
                "targets": [6,7,8,9,10,11,12],
                'className': 'pl-1 pr-1'
            },{
                "targets": [3],
                'className': 'pl-1 pr-0'

            }]

    } );
    /* Add event listener for opening and closing details
     * Note that the indicator for showing which row is open is not controlled by DataTables,
     * rather it is done here
     */
    $('#example2 tbody').on('click', '.add-new-row', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
        if ( row.child.isShown() ) {
            //  This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(iTableCounter) ).show();
            tr.addClass('shown');
            // try datatable stuff
            oInnerTable = $('#example2' + iTableCounter).dataTable({
                data: sections,
                autoWidth: true,
                deferRender: true,
                info: false,
                lengthChange: false,
                ordering: false,
                paging: false,
                scrollX: false,
                scrollY: false,
                searching: false,
                columns:[
                    { data:'refCount' },
                    { data:'section.codeRange.sNumber.sectionNumber' },
                    { data:'section.title' }
                ]
            });
            iTableCounter = iTableCounter + 1;
        }
    });
} );

var day_data = [
    {"period": "2012-10-01", "licensed": 7407, "sorned": 960},
    {"period": "2012-09-30", "licensed": 1351, "sorned": 629},
    {"period": "2012-09-29", "licensed": 3269, "sorned": 518},
    {"period": "2012-09-20", "licensed": 1246, "sorned": 661},
    {"period": "2012-09-19", "licensed": 3257, "sorned": 267}
];
Morris.Line({
    element: 'graph',
    data: day_data,
    xkey: 'period',
    ykeys: ['licensed'],
    labels: ['Licensed', 'SORN'],
    resize: true,
    grid: false,
    axes: false
});








