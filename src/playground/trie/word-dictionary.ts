class TrieNode {
  end: boolean;

  keys: { [key: string]: TrieNode };

  constructor() {
    this.end = false;
    this.keys = {};
  }
}

export class WordDictionary {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    this.insertRecursive(word, this.root);
  }

  search(word: string): boolean {
    return this.searchRecursive(word, this.root);
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
    if (word[0] === '.') {
      const allLetterNodes = Object.values(node.keys);
      const exists = allLetterNodes
        .map((letterNode) =>
          this.searchRecursive(word.substring(2), letterNode)
        )
        .reduce((acc, curr) => acc || curr, false);
      return exists;
    }
    if (!node.keys[word[0]]) {
      return false;
    }
    return this.searchRecursive(word.substring(1), node.keys[word[0]]);
  }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord('bad');
wordDictionary.addWord('dad');
wordDictionary.addWord('mad');
// wordDictionary.search('pad'); // return False
// wordDictionary.search('bad'); // return True
const result = wordDictionary.search('.ad'); // return True
console.log(result);
wordDictionary.search('b..'); // return True
