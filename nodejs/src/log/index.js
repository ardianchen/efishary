import {
  transports,
  createLogger
} from 'winston'

// custom option
var options = {
  info: {
    level: 'info',
    filename: 'src/log/logFile/info.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  err: {
    level: 'error',
    filename: 'src/log/logFile/error.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  }
}

// inisiate
var logger = createLogger({
  transports: [
    new transports.File(options.info),
    new transports.File(options.err)
  ],
  exitOnError: false // do not exit on handled exceptions
})

// create a stream object with a 'write'
logger.stream = {
  write: function (message, encoding) {
    logger.info(message)
  }
}
module.exports = logger
