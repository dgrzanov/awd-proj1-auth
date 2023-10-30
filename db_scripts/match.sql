CREATE TABLE match (
    id serial primary key,
    competition_id int,
    round int,
    competitor_home varchar,
    competitor_away varchar,
    result_home int,
    result_away int,
    constraint fk_competition foreign key(competition_id) references competition(id)
);