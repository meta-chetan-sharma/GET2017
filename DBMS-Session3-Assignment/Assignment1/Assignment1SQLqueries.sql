USE library_information_system;
/*1*/
SELECT M.member_name,M.member_id,T.title_name,B.accession_no,BI.issue_date,BI.due_date ,TIMESTAMPDIFF(MONTH,BI.issue_date,BI.due_date) AS MONTHS
FROM members AS M JOIN book_issue AS BI ON M.member_id=BI.member_id
JOIN books AS B ON B.accession_no= BI.accession_no 
JOIN titles AS T ON T.title_id = B.title_id
WHERE TIMESTAMPDIFF(MONTH,BI.issue_date,BI.due_date)>=2;

/*2*/
SELECT member_name , LENGTH(member_name) AS LENGTH
FROM members
WHERE LENGTH(member_name)=(SELECT MAX(LENGTH(member_name)) FROM members);

/*3*/
SELECT COUNT(BI.accession_no)
FROM book_issue;
/*currently issued books*/
SELECT COUNT(BI.accession_no)
FROM book_issue AS BI, book_return AS BR
WHERE if(!(BR.accession_no=BI.accession_no AND BR.member_id=BI.member_id AND BR.issue_date=BI.issue_date),true,false); 

