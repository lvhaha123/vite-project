export const ResponseWarpper = {
  success: function(data, message = '操作成功') {
    return {
      success: true,
      msg: message,
      code: 200,
      value: data,
    };
  },
  failed: function(message = '操作失败') {
    return {
      success: false,
      msg: message,
      code: 404,
    };
  },
};

