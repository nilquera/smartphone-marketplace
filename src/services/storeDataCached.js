Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
  return JSON.parse(this.getItem(key));
};

export function setObjectCached(key, object, ttl) {
  const now = new Date();
  const storageItem = {
    object,
    expiry: now.getTime() + ttl,
  };

  localStorage.setObject(key, storageItem);
}

/**
 * Returns the stored object if:
 *   - there's an stored object for the given key
 *   - the object hasn't expired
 * Otherwise, return null
 */
export function getObjectCached(key) {
  const storageItem = localStorage.getObject(key);
  if (!storageItem) return null;

  const now = new Date();
  if (now.getTime() > storageItem.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return storageItem.object;
}
