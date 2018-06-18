/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
/**
 * StrainConfig wrapper
 *
 * @type {module.LocalURLs}
 */

class LocalUrl {
    constructor(url) {
        this._url = url;
    }

    get raw() {
        return this._url;
    }

    get rawRoot() {
        return this._url;
    }

    get apiRoot() {
        return this._url;
    }

    get owner() {
        throw new Error('Not implemented');
    }

    get repo() {
        throw new Error('Not implemented');
    }

    get ref() {
        throw new Error('Not implemented');
    }
}

module.exports = class StrainURLs {
    constructor(cfg) {
        this._content = new LocalUrl(cfg.content);
        this._code = new LocalUrl(cfg.code);
    }

    get content() {
        return this._content;
    }

    get code() {
        return this._code;
    }
}