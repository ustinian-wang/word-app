# 缓存结构设计

## global

```
cache: string = 'wpv_202506141501111' # 每次版本缓存的key的格式, 'wpv_' + YYYYMMDDHHmmss+ms 
```

## user
```text/plain
{
    curr_bookId: number = 0 # 当前选择的书本编号
    progress: {
        [bookId1]: {
            learned_no_arr = [] # [no1, no2] # 学过的单词，里面是单词编号
        },
        [bookId2]: {
            learned_no_arr = [] # [no1, no2] # 学过的单词，里面是单词编号
        }
    }

}
```