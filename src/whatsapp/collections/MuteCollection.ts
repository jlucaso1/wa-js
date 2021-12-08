/*!
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { exportModule } from '../exportModule';
import { MuteModel } from '../models';
import { Collection } from './Collection';

/** @whatsapp 2.2147.14:80959 */
export declare class MuteCollection extends Collection<MuteModel> {
  static model: MuteModel;
  static cachePolicy?: any;
  globalMute(): any;
  getGlobalSounds(): any;
  setGlobalSounds(e?: any): any;
  getGlobalNotifications(): any;
  setGlobalNotifications(e?: any): any;
  getGlobalPreviews(): any;
  setGlobalPreviews(e?: any): any;
  getCollapseMuted(): any;
  setCollapseMuted(e?: any): any;
  getOutgoingMessageSound(): any;
  setOutgoingMessageSound(e?: any): any;
}
exportModule(
  exports,
  { MuteCollection: (m) => m.MuteCollectionImpl || m.MuteCollection },
  (m) => m.MuteCollectionImpl || m.MuteCollection
);
