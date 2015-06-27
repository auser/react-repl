const React = require('react');

const styles = {
  consoleContainer: {
    maxHeight: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    overflow: 'auto'
  },
  console: {
    border: '1px solid red',
    maxHeight: '100%',
    //vertical-align: bottom,
    overflow: 'scroll',
    background: 'rgba(255,255,255,0.5)'
  },
  consoleCopy: {
    content: "CONSOLE OUTPUT",
    fontFamily: 'Consolas, Sans-Serif',
    fontSize: '12px',
    color: '#ddd',
    backgroundColor: '#333',
    display: 'block',
    padding: '3px 20px',
  },
  consolePre: {
    fontFamily: 'Consolas',
    fontSize: '12px',
    padding: '0 15px',
    borderLeft: '5px solid #999',
  }
};

const Console = React.createClass({
  render() {

    return this.props.log &&
      (<div style={styles.console}>
        <pre style={styles.consolePre}>
          {this.props.log}
        </pre>
      </div>);
  }
});

module.exports = Console;