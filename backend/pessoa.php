<?php
    header("Access-Control-Allow-Origin: *");
    $nome = $_GET['nome'];
    $data = $_GET['data'];

    $conexao = new PDO('mysql:local=localhost;dbname=exemplopi;port=3307;','root','');

    $sql = "INSERT INTO pessoa (nome) VALUES ('$nome');";
    $conexao->exec($sql);

    echo 'Salvo com sucesso';