'use strict'

module.exports = {
  apps: [
    {
      port: 7001,
      name: 'test',
			script: './app.js',
			env_production: {
        NODE_ENV: 'production'
			},
			exec_mode: 'cluster',
			instances: 3,
      max_restarts: 5, // 最大重启次数5
      min_uptime: 10000, // 启动10s以内挂掉的进程视为异常重启
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss SSS',
      merge_logs: true
    }
	]
}

'use strict';
