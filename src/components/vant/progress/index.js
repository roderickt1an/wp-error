'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    inactive: Boolean,
    percentage: Number,
    pivotText: String,
    pivotColor: String,
    showPivot: {
      type: Boolean,
      value: true
    },
    color: {
      type: String,
      value: '#38f'
    },
    textColor: {
      type: String,
      value: '#fff'
    }
  },
  data: {
    pivotWidth: 0,
    progressWidth: 0
  },
  watch: {
    pivotText: 'getWidth',
    showPivot: 'getWidth'
  },
  computed: {
    portionStyle: function portionStyle() {
      var width = (this.data.progressWidth - this.data.pivotWidth) * this.data.percentage / 100 + 'px';
      var background = this.getCurrentColor();
      return "width: " + width + "; background: " + background + "; ";
    },
    pivotStyle: function pivotStyle() {
      var color = this.data.textColor;
      var background = this.data.pivotColor || this.getCurrentColor();
      return "color: " + color + "; background: " + background;
    },
    text: function text() {
      return this.data.pivotText || this.data.percentage + '%';
    }
  },
  mounted: function mounted() {
    this.getWidth();
  },
  methods: {
    getCurrentColor: function getCurrentColor() {
      return this.data.inactive ? '#cacaca' : this.data.color;
    },
    getWidth: function getWidth() {
      var _this = this;

      this.getRect('.van-progress').then(function (rect) {
        _this.setData({
          progressWidth: rect.width
        });
      });
      this.getRect('.van-progress__pivot').then(function (rect) {
        _this.setData({
          pivotWidth: rect.width || 0
        });
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5hY3RpdmUiLCJCb29sZWFuIiwicGVyY2VudGFnZSIsIk51bWJlciIsInBpdm90VGV4dCIsIlN0cmluZyIsInBpdm90Q29sb3IiLCJzaG93UGl2b3QiLCJ0eXBlIiwidmFsdWUiLCJjb2xvciIsInRleHRDb2xvciIsImRhdGEiLCJwaXZvdFdpZHRoIiwicHJvZ3Jlc3NXaWR0aCIsIndhdGNoIiwiY29tcHV0ZWQiLCJwb3J0aW9uU3R5bGUiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJnZXRDdXJyZW50Q29sb3IiLCJwaXZvdFN0eWxlIiwidGV4dCIsIm1vdW50ZWQiLCJnZXRXaWR0aCIsIm1ldGhvZHMiLCJfdGhpcyIsImdldFJlY3QiLCJ0aGVuIiwicmVjdCIsInNldERhdGEiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsU0FBTztBQUNMQyxjQUFVQyxPQURMO0FBRUxDLGdCQUFZQyxNQUZQO0FBR0xDLGVBQVdDLE1BSE47QUFJTEMsZ0JBQVlELE1BSlA7QUFLTEUsZUFBVztBQUNUQyxZQUFNUCxPQURHO0FBRVRRLGFBQU87QUFGRSxLQUxOO0FBU0xDLFdBQU87QUFDTEYsWUFBTUgsTUFERDtBQUVMSSxhQUFPO0FBRkYsS0FURjtBQWFMRSxlQUFXO0FBQ1RILFlBQU1ILE1BREc7QUFFVEksYUFBTztBQUZFO0FBYk4sR0FESztBQW1CWkcsUUFBTTtBQUNKQyxnQkFBWSxDQURSO0FBRUpDLG1CQUFlO0FBRlgsR0FuQk07QUF1QlpDLFNBQU87QUFDTFgsZUFBVyxVQUROO0FBRUxHLGVBQVc7QUFGTixHQXZCSztBQTJCWlMsWUFBVTtBQUNSQyxrQkFBYyxTQUFTQSxZQUFULEdBQXdCO0FBQ3BDLFVBQUlDLFFBQVEsQ0FBQyxLQUFLTixJQUFMLENBQVVFLGFBQVYsR0FBMEIsS0FBS0YsSUFBTCxDQUFVQyxVQUFyQyxJQUFtRCxLQUFLRCxJQUFMLENBQVVWLFVBQTdELEdBQTBFLEdBQTFFLEdBQWdGLElBQTVGO0FBQ0EsVUFBSWlCLGFBQWEsS0FBS0MsZUFBTCxFQUFqQjtBQUNBLGFBQU8sWUFBWUYsS0FBWixHQUFvQixnQkFBcEIsR0FBdUNDLFVBQXZDLEdBQW9ELElBQTNEO0FBQ0QsS0FMTztBQU1SRSxnQkFBWSxTQUFTQSxVQUFULEdBQXNCO0FBQ2hDLFVBQUlYLFFBQVEsS0FBS0UsSUFBTCxDQUFVRCxTQUF0QjtBQUNBLFVBQUlRLGFBQWEsS0FBS1AsSUFBTCxDQUFVTixVQUFWLElBQXdCLEtBQUtjLGVBQUwsRUFBekM7QUFDQSxhQUFPLFlBQVlWLEtBQVosR0FBb0IsZ0JBQXBCLEdBQXVDUyxVQUE5QztBQUNELEtBVk87QUFXUkcsVUFBTSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLGFBQU8sS0FBS1YsSUFBTCxDQUFVUixTQUFWLElBQXVCLEtBQUtRLElBQUwsQ0FBVVYsVUFBVixHQUF1QixHQUFyRDtBQUNEO0FBYk8sR0EzQkU7QUEwQ1pxQixXQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsU0FBS0MsUUFBTDtBQUNELEdBNUNXO0FBNkNaQyxXQUFTO0FBQ1BMLHFCQUFpQixTQUFTQSxlQUFULEdBQTJCO0FBQzFDLGFBQU8sS0FBS1IsSUFBTCxDQUFVWixRQUFWLEdBQXFCLFNBQXJCLEdBQWlDLEtBQUtZLElBQUwsQ0FBVUYsS0FBbEQ7QUFDRCxLQUhNO0FBSVBjLGNBQVUsU0FBU0EsUUFBVCxHQUFvQjtBQUM1QixVQUFJRSxRQUFRLElBQVo7O0FBRUEsV0FBS0MsT0FBTCxDQUFhLGVBQWIsRUFBOEJDLElBQTlCLENBQW1DLFVBQVVDLElBQVYsRUFBZ0I7QUFDakRILGNBQU1JLE9BQU4sQ0FBYztBQUNaaEIseUJBQWVlLEtBQUtYO0FBRFIsU0FBZDtBQUdELE9BSkQ7QUFLQSxXQUFLUyxPQUFMLENBQWEsc0JBQWIsRUFBcUNDLElBQXJDLENBQTBDLFVBQVVDLElBQVYsRUFBZ0I7QUFDeERILGNBQU1JLE9BQU4sQ0FBYztBQUNaakIsc0JBQVlnQixLQUFLWCxLQUFMLElBQWM7QUFEZCxTQUFkO0FBR0QsT0FKRDtBQUtEO0FBakJNO0FBN0NHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgcHJvcHM6IHtcbiAgICBpbmFjdGl2ZTogQm9vbGVhbixcbiAgICBwZXJjZW50YWdlOiBOdW1iZXIsXG4gICAgcGl2b3RUZXh0OiBTdHJpbmcsXG4gICAgcGl2b3RDb2xvcjogU3RyaW5nLFxuICAgIHNob3dQaXZvdDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSxcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcjMzhmJ1xuICAgIH0sXG4gICAgdGV4dENvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJyNmZmYnXG4gICAgfVxuICB9LFxuICBkYXRhOiB7XG4gICAgcGl2b3RXaWR0aDogMCxcbiAgICBwcm9ncmVzc1dpZHRoOiAwXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgcGl2b3RUZXh0OiAnZ2V0V2lkdGgnLFxuICAgIHNob3dQaXZvdDogJ2dldFdpZHRoJ1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHBvcnRpb25TdHlsZTogZnVuY3Rpb24gcG9ydGlvblN0eWxlKCkge1xuICAgICAgdmFyIHdpZHRoID0gKHRoaXMuZGF0YS5wcm9ncmVzc1dpZHRoIC0gdGhpcy5kYXRhLnBpdm90V2lkdGgpICogdGhpcy5kYXRhLnBlcmNlbnRhZ2UgLyAxMDAgKyAncHgnO1xuICAgICAgdmFyIGJhY2tncm91bmQgPSB0aGlzLmdldEN1cnJlbnRDb2xvcigpO1xuICAgICAgcmV0dXJuIFwid2lkdGg6IFwiICsgd2lkdGggKyBcIjsgYmFja2dyb3VuZDogXCIgKyBiYWNrZ3JvdW5kICsgXCI7IFwiO1xuICAgIH0sXG4gICAgcGl2b3RTdHlsZTogZnVuY3Rpb24gcGl2b3RTdHlsZSgpIHtcbiAgICAgIHZhciBjb2xvciA9IHRoaXMuZGF0YS50ZXh0Q29sb3I7XG4gICAgICB2YXIgYmFja2dyb3VuZCA9IHRoaXMuZGF0YS5waXZvdENvbG9yIHx8IHRoaXMuZ2V0Q3VycmVudENvbG9yKCk7XG4gICAgICByZXR1cm4gXCJjb2xvcjogXCIgKyBjb2xvciArIFwiOyBiYWNrZ3JvdW5kOiBcIiArIGJhY2tncm91bmQ7XG4gICAgfSxcbiAgICB0ZXh0OiBmdW5jdGlvbiB0ZXh0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5waXZvdFRleHQgfHwgdGhpcy5kYXRhLnBlcmNlbnRhZ2UgKyAnJSc7XG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIHRoaXMuZ2V0V2lkdGgoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldEN1cnJlbnRDb2xvcjogZnVuY3Rpb24gZ2V0Q3VycmVudENvbG9yKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5pbmFjdGl2ZSA/ICcjY2FjYWNhJyA6IHRoaXMuZGF0YS5jb2xvcjtcbiAgICB9LFxuICAgIGdldFdpZHRoOiBmdW5jdGlvbiBnZXRXaWR0aCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi1wcm9ncmVzcycpLnRoZW4oZnVuY3Rpb24gKHJlY3QpIHtcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgcHJvZ3Jlc3NXaWR0aDogcmVjdC53aWR0aFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLXByb2dyZXNzX19waXZvdCcpLnRoZW4oZnVuY3Rpb24gKHJlY3QpIHtcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgcGl2b3RXaWR0aDogcmVjdC53aWR0aCB8fCAwXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59KTsiXX0=