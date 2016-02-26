(function(){
  angular.module('components.menu',[])
  .directive('menu', menu);

  menu.$inject = ['$document'];

  function menu($document){
    return {
      restrict: 'E',
      templateUrl: 'components/circular-menu/menu.html',
      scope: {

      },

      link: function(scope, element){
        $('.flyout-btn').click(function () {
            $('.flyout-btn').toggleClass('btn-rotate');
            $('.flyout').find('a').removeClass();
            return $('.flyout').removeClass('flyout-init fade').toggleClass('expand');
        });
        $('.flyout').find('a').click(function () {
            $('.flyout-btn').toggleClass('btn-rotate');
            $('.flyout').removeClass('expand').addClass('fade');
            return $(this).addClass('clicked');
        });
      }
    };
  }
})();
