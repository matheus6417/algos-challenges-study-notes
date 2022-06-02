class TrieNode {
  end: boolean;

  keys: { [key: string]: TrieNode };

  constructor() {
    this.end = false;
    this.keys = {};
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    this.insertRecursive(word, this.root);
  }

  search(word: string): boolean {
    return this.searchRecursive(word, this.root);
  }

  startsWith(prefix: string): boolean {
    return this.startsWithRecursive(prefix, this.root);
  }

  private insertRecursive(word: string, node: TrieNode): void {
    if (word.length === 0) {
      node.end = true;
    } else if (!node.keys[word[0]]) {
      node.keys[word[0]] = new TrieNode();
      this.insertRecursive(word.substring(1), node.keys[word[0]]);
    } else {
      this.insertRecursive(word.substring(1), node.keys[word[0]]);
    }
  }

  private searchRecursive(word: string, node: TrieNode): boolean {
    if (word.length === 0 && node.end === true) {
      return true;
    }
    if (word.length === 0 && node.end === false) {
      return false;
    }
    if (!node.keys[word[0]]) {
      return false;
    }
    return this.searchRecursive(word.substring(1), node.keys[word[0]]);
  }

  private startsWithRecursive(prefix: string, node: TrieNode): boolean {
    if (prefix.length === 0) {
      return true;
    }
    if (!node.keys[prefix[0]]) {
      return false;
    }
    return this.searchRecursive(prefix.substring(1), node.keys[prefix[0]]);
  }
}

const trie = new Trie();

trie.insert('apple');
trie.search('apple'); // returns true
trie.search('app'); // returns false
const startsWithReturn = trie.startsWith('app'); // returns true
console.log(startsWithReturn);
trie.insert('app');
trie.search('app'); // returns true
