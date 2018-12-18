'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

var queue = [];

var Dialog = function Dialog(options) {
  return new Promise(function (resolve, reject) {
    var pages = getCurrentPages();
    var ctx = pages[pages.length - 1];
    var dialog = ctx.selectComponent(options.selector);
    delete options.selector;

    if (dialog) {
      dialog.setData(_extends({
        onCancel: reject,
        onConfirm: resolve
      }, options));
      queue.push(dialog);
    }
  });
};

Dialog.defaultOptions = {
  show: true,
  title: '',
  message: '',
  zIndex: 100,
  overlay: true,
  asyncClose: false,
  selector: '#van-dialog',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: ''
};

Dialog.alert = function (options) {
  return Dialog(_extends({}, Dialog.currentOptions, options));
};

Dialog.confirm = function (options) {
  return Dialog(_extends({}, Dialog.currentOptions, {
    showCancelButton: true
  }, options));
};

Dialog.close = function () {
  queue.forEach(function (dialog) {
    dialog.close();
  });
  queue = [];
};

Dialog.stopLoading = function () {
  queue.forEach(function (dialog) {
    dialog.stopLoading();
  });
};

Dialog.setDefaultOptions = function (options) {
  Object.assign(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = _extends({}, Dialog.defaultOptions);
};

Dialog.resetDefaultOptions();
exports.default = Dialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5qcyJdLCJuYW1lcyI6WyJfZXh0ZW5kcyIsIk9iamVjdCIsImFzc2lnbiIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsInF1ZXVlIiwiRGlhbG9nIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJjdHgiLCJkaWFsb2ciLCJzZWxlY3RDb21wb25lbnQiLCJzZWxlY3RvciIsInNldERhdGEiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsInB1c2giLCJkZWZhdWx0T3B0aW9ucyIsInNob3ciLCJ0aXRsZSIsIm1lc3NhZ2UiLCJ6SW5kZXgiLCJvdmVybGF5IiwiYXN5bmNDbG9zZSIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInNob3dDb25maXJtQnV0dG9uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNsb3NlT25DbGlja092ZXJsYXkiLCJjb25maXJtQnV0dG9uT3BlblR5cGUiLCJhbGVydCIsImN1cnJlbnRPcHRpb25zIiwiY29uZmlybSIsImNsb3NlIiwiZm9yRWFjaCIsInN0b3BMb2FkaW5nIiwic2V0RGVmYXVsdE9wdGlvbnMiLCJyZXNldERlZmF1bHRPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQVNBLFFBQVQsR0FBb0I7QUFBRUEsYUFBV0MsT0FBT0MsTUFBUCxJQUFpQixVQUFVQyxNQUFWLEVBQWtCO0FBQUUsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlDLFVBQVVDLE1BQTlCLEVBQXNDRixHQUF0QyxFQUEyQztBQUFFLFVBQUlHLFNBQVNGLFVBQVVELENBQVYsQ0FBYixDQUEyQixLQUFLLElBQUlJLEdBQVQsSUFBZ0JELE1BQWhCLEVBQXdCO0FBQUUsWUFBSU4sT0FBT1EsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDSixNQUFyQyxFQUE2Q0MsR0FBN0MsQ0FBSixFQUF1RDtBQUFFTCxpQkFBT0ssR0FBUCxJQUFjRCxPQUFPQyxHQUFQLENBQWQ7QUFBNEI7QUFBRTtBQUFFLEtBQUMsT0FBT0wsTUFBUDtBQUFnQixHQUE1UCxDQUE4UCxPQUFPSCxTQUFTWSxLQUFULENBQWUsSUFBZixFQUFxQlAsU0FBckIsQ0FBUDtBQUF5Qzs7QUFFN1QsSUFBSVEsUUFBUSxFQUFaOztBQUVBLElBQUlDLFNBQVMsU0FBU0EsTUFBVCxDQUFnQkMsT0FBaEIsRUFBeUI7QUFDcEMsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDNUMsUUFBSUMsUUFBUUMsaUJBQVo7QUFDQSxRQUFJQyxNQUFNRixNQUFNQSxNQUFNYixNQUFOLEdBQWUsQ0FBckIsQ0FBVjtBQUNBLFFBQUlnQixTQUFTRCxJQUFJRSxlQUFKLENBQW9CUixRQUFRUyxRQUE1QixDQUFiO0FBQ0EsV0FBT1QsUUFBUVMsUUFBZjs7QUFFQSxRQUFJRixNQUFKLEVBQVk7QUFDVkEsYUFBT0csT0FBUCxDQUFlekIsU0FBUztBQUN0QjBCLGtCQUFVUixNQURZO0FBRXRCUyxtQkFBV1Y7QUFGVyxPQUFULEVBR1pGLE9BSFksQ0FBZjtBQUlBRixZQUFNZSxJQUFOLENBQVdOLE1BQVg7QUFDRDtBQUNGLEdBYk0sQ0FBUDtBQWNELENBZkQ7O0FBaUJBUixPQUFPZSxjQUFQLEdBQXdCO0FBQ3RCQyxRQUFNLElBRGdCO0FBRXRCQyxTQUFPLEVBRmU7QUFHdEJDLFdBQVMsRUFIYTtBQUl0QkMsVUFBUSxHQUpjO0FBS3RCQyxXQUFTLElBTGE7QUFNdEJDLGNBQVksS0FOVTtBQU90QlgsWUFBVSxhQVBZO0FBUXRCWSxxQkFBbUIsSUFSRztBQVN0QkMsb0JBQWtCLElBVEk7QUFVdEJDLHFCQUFtQixJQVZHO0FBV3RCQyxvQkFBa0IsS0FYSTtBQVl0QkMsdUJBQXFCLEtBWkM7QUFhdEJDLHlCQUF1QjtBQWJELENBQXhCOztBQWdCQTNCLE9BQU80QixLQUFQLEdBQWUsVUFBVTNCLE9BQVYsRUFBbUI7QUFDaEMsU0FBT0QsT0FBT2QsU0FBUyxFQUFULEVBQWFjLE9BQU82QixjQUFwQixFQUFvQzVCLE9BQXBDLENBQVAsQ0FBUDtBQUNELENBRkQ7O0FBSUFELE9BQU84QixPQUFQLEdBQWlCLFVBQVU3QixPQUFWLEVBQW1CO0FBQ2xDLFNBQU9ELE9BQU9kLFNBQVMsRUFBVCxFQUFhYyxPQUFPNkIsY0FBcEIsRUFBb0M7QUFDaERKLHNCQUFrQjtBQUQ4QixHQUFwQyxFQUVYeEIsT0FGVyxDQUFQLENBQVA7QUFHRCxDQUpEOztBQU1BRCxPQUFPK0IsS0FBUCxHQUFlLFlBQVk7QUFDekJoQyxRQUFNaUMsT0FBTixDQUFjLFVBQVV4QixNQUFWLEVBQWtCO0FBQzlCQSxXQUFPdUIsS0FBUDtBQUNELEdBRkQ7QUFHQWhDLFVBQVEsRUFBUjtBQUNELENBTEQ7O0FBT0FDLE9BQU9pQyxXQUFQLEdBQXFCLFlBQVk7QUFDL0JsQyxRQUFNaUMsT0FBTixDQUFjLFVBQVV4QixNQUFWLEVBQWtCO0FBQzlCQSxXQUFPeUIsV0FBUDtBQUNELEdBRkQ7QUFHRCxDQUpEOztBQU1BakMsT0FBT2tDLGlCQUFQLEdBQTJCLFVBQVVqQyxPQUFWLEVBQW1CO0FBQzVDZCxTQUFPQyxNQUFQLENBQWNZLE9BQU82QixjQUFyQixFQUFxQzVCLE9BQXJDO0FBQ0QsQ0FGRDs7QUFJQUQsT0FBT21DLG1CQUFQLEdBQTZCLFlBQVk7QUFDdkNuQyxTQUFPNkIsY0FBUCxHQUF3QjNDLFNBQVMsRUFBVCxFQUFhYyxPQUFPZSxjQUFwQixDQUF4QjtBQUNELENBRkQ7O0FBSUFmLE9BQU9tQyxtQkFBUDtrQkFDZW5DLE0iLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIHF1ZXVlID0gW107XG5cbnZhciBEaWFsb2cgPSBmdW5jdGlvbiBEaWFsb2cob3B0aW9ucykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgIHZhciBjdHggPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcbiAgICB2YXIgZGlhbG9nID0gY3R4LnNlbGVjdENvbXBvbmVudChvcHRpb25zLnNlbGVjdG9yKTtcbiAgICBkZWxldGUgb3B0aW9ucy5zZWxlY3RvcjtcblxuICAgIGlmIChkaWFsb2cpIHtcbiAgICAgIGRpYWxvZy5zZXREYXRhKF9leHRlbmRzKHtcbiAgICAgICAgb25DYW5jZWw6IHJlamVjdCxcbiAgICAgICAgb25Db25maXJtOiByZXNvbHZlXG4gICAgICB9LCBvcHRpb25zKSk7XG4gICAgICBxdWV1ZS5wdXNoKGRpYWxvZyk7XG4gICAgfVxuICB9KTtcbn07XG5cbkRpYWxvZy5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgc2hvdzogdHJ1ZSxcbiAgdGl0bGU6ICcnLFxuICBtZXNzYWdlOiAnJyxcbiAgekluZGV4OiAxMDAsXG4gIG92ZXJsYXk6IHRydWUsXG4gIGFzeW5jQ2xvc2U6IGZhbHNlLFxuICBzZWxlY3RvcjogJyN2YW4tZGlhbG9nJyxcbiAgY29uZmlybUJ1dHRvblRleHQ6ICfnoa7orqQnLFxuICBjYW5jZWxCdXR0b25UZXh0OiAn5Y+W5raIJyxcbiAgc2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG4gIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxuICBjbG9zZU9uQ2xpY2tPdmVybGF5OiBmYWxzZSxcbiAgY29uZmlybUJ1dHRvbk9wZW5UeXBlOiAnJ1xufTtcblxuRGlhbG9nLmFsZXJ0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgcmV0dXJuIERpYWxvZyhfZXh0ZW5kcyh7fSwgRGlhbG9nLmN1cnJlbnRPcHRpb25zLCBvcHRpb25zKSk7XG59O1xuXG5EaWFsb2cuY29uZmlybSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHJldHVybiBEaWFsb2coX2V4dGVuZHMoe30sIERpYWxvZy5jdXJyZW50T3B0aW9ucywge1xuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWVcbiAgfSwgb3B0aW9ucykpO1xufTtcblxuRGlhbG9nLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChkaWFsb2cpIHtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbiAgfSk7XG4gIHF1ZXVlID0gW107XG59O1xuXG5EaWFsb2cuc3RvcExvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKGRpYWxvZykge1xuICAgIGRpYWxvZy5zdG9wTG9hZGluZygpO1xuICB9KTtcbn07XG5cbkRpYWxvZy5zZXREZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIE9iamVjdC5hc3NpZ24oRGlhbG9nLmN1cnJlbnRPcHRpb25zLCBvcHRpb25zKTtcbn07XG5cbkRpYWxvZy5yZXNldERlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICBEaWFsb2cuY3VycmVudE9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgRGlhbG9nLmRlZmF1bHRPcHRpb25zKTtcbn07XG5cbkRpYWxvZy5yZXNldERlZmF1bHRPcHRpb25zKCk7XG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7Il19