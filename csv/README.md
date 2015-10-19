object_type,object_id,st_astext

csvsql --query "select "way" as object_type,m.way_id as object_id, m.geom as st_astext from processed as m;" processed.csv > processed-fixed.csv