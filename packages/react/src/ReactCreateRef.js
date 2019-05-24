/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import type {RefObject} from 'shared/ReactTypes';

// an immutable object with a single mutable value
export function createRef(): RefObject {
  // HTML元素 current会接收DOM元素
  // class组件 current会接收组件实例
  const refObject = {
    current: null,
  };
  if (__DEV__) {
    // 不能添加新的值也不能删除 但可以修改现有属性值 并将所有现有属性标记为不可配置
    Object.seal(refObject);
  }
  return refObject;
}
