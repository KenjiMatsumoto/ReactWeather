var React = require('react');

var ErrorModal = React.createClass({
  //デフォルト値の指定
  getDefaultProps: function() {
    return {
      title: 'Error'
    };
  },
  //制約を加える、型指定やisRequired(必須)制約などが可能
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  //クライアント上(サーバー上は除く)でのみ、初期描画(rendering)が発生した直後に一度実行されます。
  componentDidMount: function() {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    var {title, message} = this.props;
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
