/**
 * Extends Map and adds a few convenient functions.
 */
export declare class EnhancedMap<K, V> extends Map<K, V> {
    /**
     * If key has a mapping already returns the currently associated value. If
     * there is no mapping, calls the computer which must return a value V.
     * The value is then stored for given key and returned.
     * @param key Key
     * @param computer Computer which is called only if key has no mapping yet.
     * @return Existing value if the key already existed, or the newly computed value.
     */
    computeIfAbsent(key: K, computer: (currentKey: K) => V): V;
    /**
     * If the key exists already calls given computer, if the key does not exist
     * this method does nothing.
     *
     * The computer is called with current key and current value associated. The
     * computer can return a (new) value V or undefined. When undefined is returned
     * the key is removed from this map, when a V is returned the key is updated
     * with the new value V.
     * @param key Key
     * @param computer Computer which is called only if the key has a mapping already
     * @return Undefined if the key has no mapping, otherwise the value returned from computer
     */
    computeIfPresent(key: K, computer: (currentKey: K, currentValue: V) => V | undefined): V | undefined;
    /**
     * Computes a value for given key, the computer can return a value V (in which case the map
     * will set the value for given key), if it returns undefined the mapping for key K will be
     * removed.
     * @param key Key to compute
     * @param computer Computer which is called, note that the currentValue argument contains the existing
     *                 value or is undefined when no mapping exists for the key.
     * @return The newly computed value
     */
    compute(key: K, computer: (currentKey: K, currentValue: V | undefined) => V | undefined): V | undefined;
}