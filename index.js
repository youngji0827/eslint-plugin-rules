/**
 * Copyright 2023-present Skyscanner Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const noAxios = require('./src/rules/no-axios/no-axios');
const forbidComponentProps = require('./src/rules/forbid-component-props/forbid-component-props');

module.exports = {
  rules: {
    'no-axios': noAxios,
    'forbid-component-props': forbidComponentProps,
  },
};
