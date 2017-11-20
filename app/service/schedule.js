/* eslint linebreak-style: ["error", "windows"]*/
'use strict';

const Service = require('egg').Service;

class ScheduleService extends Service {
  async add(body) {
    const result = await this.app.mysql.insert('schedule', body);
    return { success: result.affectedRows === 1 };
  }
}

module.exports = ScheduleService;
