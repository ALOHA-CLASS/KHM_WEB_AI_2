-- searchType : 1 (제목)
SELECT *
FROM board
WHERE title LIKE '%keyword%'
;

-- searchType : 2 (내용)
SELECT *
FROM board
WHERE content LIKE '%keyword%'
;

-- searchType : 3 (제목+내용)
SELECT *
FROM board
WHERE title LIKE '%keyword%'
   OR content LIKE '%keyword%'
;

-- searchType : 4 (작성자)
SELECT *
FROM board
WHERE writer LIKE '%keyword%'
;