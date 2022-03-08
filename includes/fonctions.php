<?php

function get_pseudo($id){
    global $bdd;
    $pseudo = $bdd->prepare('SELECT pseudo FROM membres WHERE id = ?');
    $pseudo->execute(array($id));
    $pseudo = $pseudo->fetch();
    $pseudo = $pseudo['pseudo'];
    return $pseudo;
}

function get_id($pseudo){
    global $bdd;
    $id = $bdd->prepare('SELECT id FROM membres WHERE id = ?');
    $id->execute(array($pseudo));
    $id = $id->fetch();
    $id = $id['id'];
    return $id;
}

function nb_reponse_categorie($id_categorie){
    global $bdd;
    $nb = $bdd->prepare('SELECT reponses.id FROM reponses LEFT JOIN topics_categories ON topics_categories.id_topic = reponses.id_topic WHERE topics_categories.id_categorie = ?');
    $nb->execute(array($id_categorie));
    return $nb->rowCount();
}

function nb_reponse_topic($id_topic){
    global $bdd;
    $nb = $bdd->prepare('SELECT reponses.id FROM reponses LEFT JOIN topics ON topics.id = reponses.id_topic WHERE topics.id = ?');
    $nb->execute(array($id_topic));
    return $nb->rowCount();
}

function derniere_reponse_categorie($id_categorie){
    global $bdd;
    $reponse = $bdd->prepare('SELECT reponses.* FROM reponses LEFT JOIN topics_categories ON topics_categories.id_topic = reponses.id_topic WHERE topics_categories.id_categorie = ? 
                         ORDER BY reponses.date_heure_post DESC LIMIT 0,1');
    $reponse->execute(array($id_categorie));
    if($reponse->rowCount() > 0){
        $reponse = $reponse->fetch();
        $date_derniere_reponse = $reponse['date_heure_post'];
    
    $date_derniere_reponse .= '<br>de <a href="profil.php?id='.get_id($reponse['id_posteur']).'">'.get_pseudo($reponse['id_posteur']).'</a>';
    return $date_derniere_reponse;
    }
    else { echo 'Pas encore de réponse'; }
}

function derniere_reponse_topic($id_topic){
    global $bdd;
    $reponse = $bdd->prepare('SELECT reponses.* FROM reponses LEFT JOIN topics ON topics.id = reponses.id_topic WHERE topics.id = ? ORDER BY reponses.date_heure_post DESC LIMIT 0,1');
    $reponse->execute(array($id_topic));
    if($reponse->rowCount() > 0){
        $reponse = $reponse->fetch();
        $date_derniere_reponse = $reponse['date_heure_post'];
        
        $date_derniere_reponse .= '<br>de <a href="profil.php?id='.get_id($reponse['id_posteur']).'">'.get_pseudo($reponse['id_posteur']).'</a>';
        return $date_derniere_reponse;
    }
    else { echo 'Pas encore de réponse'; }
}

function dernier_topic_post($id_categorie){
    global $bdd;
    $reponse = $bdd->prepare('SELECT topics.* FROM topics LEFT JOIN topics_categories ON topics_categories.id_topic = topics.id WHERE topics_categories.id_categorie = ? 
                         ORDER BY topics.date_hour DESC LIMIT 0,1');
    $reponse->execute(array($id_categorie));
    if($reponse->rowCount() > 0){
        $reponse = $reponse->fetch();
        $date_derniere_reponse = $reponse['date_hour'];
    
    $date_derniere_reponse .= '<br>de <a href="profil.php?id='.get_id($reponse['id_creator']).'">'.get_pseudo($reponse['id_creator']).'</a>';
    return $date_derniere_reponse;
    }
    else { echo 'Aucun topic n\'a été posté'; }
}
?>