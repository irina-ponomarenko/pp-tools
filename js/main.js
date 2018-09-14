// $(document).ready(function () {
//     $('select').each(function(){
//         var $this = $(this), numberOfOptions = $(this).children('option').length;
//
//         $this.addClass('select-hidden');
//         $this.wrap('<div class="select"></div>');
//         $this.after('<div class="select-styled"></div>');
//
//         var $styledSelect = $this.next('div.select-styled');
//         $styledSelect.html('<span class="' + $this.children('option').eq(0).attr('class') + '">' + $this.children('option').eq(0).text() + '</span>');
//
//         var $list = $('<ul />', {
//             'class': 'select-options'
//         }).insertAfter($styledSelect);
//
//         for (var i = 0; i < numberOfOptions; i++) {
//             $('<li />', {
//                 html: '<span>' + $this.children('option').eq(i).text() + '</span>',
//                 rel: $this.children('option').eq(i).val(),
//                 class: $this.children('option').eq(i).attr('class'),
//             }).appendTo($list);
//         }
//
//         var $listItems = $list.children('li');
//
//         $styledSelect.click(function(e) {
//             e.stopPropagation();
//             $('div.select-styled.active').not(this).each(function(){
//                 $(this).removeClass('active').next('ul.select-options').hide();
//             });
//             $(this).toggleClass('active').next('ul.select-options').toggle();
//         });
//
//         $listItems.click(function(e) {
//             e.stopPropagation();
//             $styledSelect.html('<span class="' + $(this).attr('class') +'">' + $(this).text() + '</span>').removeClass('active');
//             $this.val($(this).attr('rel'));
//             $list.hide();
//             //console.log($this.val());
//         });
//
//         $(document).click(function() {
//             $styledSelect.removeClass('active');
//             $list.hide();
//         });
//
//     });
//
//     //------------tabs-------//
//     $(function() {
//
//         $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
//             $(this)
//                 .addClass('active').siblings().removeClass('active')
//                 .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
//         });
//
//     });
//
// });
