function buildUrl(url, options) {
  let builtUrl = buildBaseUrl(url, options);

  if (options) {
    if (options.path) {
      builtUrl = addPath(builtUrl, options.path);
    }
    if (options.queryParams) {
      builtUrl = addQueryParams(builtUrl, options.queryParams);
    }
    if (options.hash) {
      builtUrl = addHash(builtUrl, options.hash);
    }
  }
  return builtUrl;
}

function buildBaseUrl(url, options) {
  if (url === null) {
    return '';
  } else if (typeof(url) === 'object') {
    options = url;
    return '';
  } else {
    return url;
  }
}

function addPath(url, path) {
  return url + '/' + path;
}

function addQueryParams(url, queryParams) {
  const queryString = Object.keys(queryParams)
    .map(key => `${key}=${queryParams[key]}`)
    .join('&');
  return url + '?' + queryString;
}

function addHash(url, hash) {
  return url + '#' + hash;
}