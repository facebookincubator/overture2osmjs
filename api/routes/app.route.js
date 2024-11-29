/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import express from 'express';
import { getIndex } from '../controllers/app.controller.js';

const router = express.Router();

router.get("/", getIndex);



export default router;
