/*
 * Copyright (C) 2014-2017 Andrea Feccomandi
 *
 * Licensed under the terms of GNU GPL License;
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.gnu.org/licenses/gpl-2.0.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY.
 * See the GNU General Public License for more details.
 *
 */

angular.module('bibiscoApp').service('FileSystemService', function(
  LoggerService) {
  'use strict';

  var remote = require('electron').remote;
  var fs = remote.getGlobal('fs');

  return {
    createDirectory: function(path) {
      var result = true;
      // if the directory not exists I try to create it
      if (!fs.existsSync(path)) {
        try {
          fs.mkdirSync(path);
        } catch (err) {
          LoggerService.error('Error creating directory: ' + path + ' - ' +
            err);
          result = false;
        }
      }
      return result;
    },
    deleteDirectory: function(path) {
      fs.removeSync(path);
    }
  }
});
