(function() {var implementors = {};
implementors["backup_cli"] = [{"text":"impl From&lt;Vec&lt;Metadata&gt;&gt; for MetadataView","synthetic":false,"types":[]}];
implementors["consensus_types"] = [{"text":"impl&lt;'_&gt; From&lt;&amp;'_ Block&gt; for BlockMetadata","synthetic":false,"types":[]}];
implementors["executor_types"] = [{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;TreeState&gt; for ExecutedTrees","synthetic":false,"types":[]}];
implementors["ir_to_bytecode_syntax"] = [{"text":"impl&lt;L&gt; From&lt;Error&gt; for ParseError&lt;L, Error&gt;","synthetic":false,"types":[]}];
implementors["libra_canonical_serialization"] = [{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]}];
implementors["libra_config"] = [{"text":"impl&lt;'_&gt; From&lt;&amp;'_ SecureBackend&gt; for Storage","synthetic":false,"types":[]}];
implementors["libra_crypto"] = [{"text":"impl&lt;'_&gt; From&lt;&amp;'_ Ed25519PrivateKey&gt; for Ed25519PublicKey","synthetic":false,"types":[]},{"text":"impl From&lt;HashValue&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ Ed25519PrivateKey&gt; for MultiEd25519PrivateKey","synthetic":false,"types":[]},{"text":"impl From&lt;Ed25519PublicKey&gt; for MultiEd25519PublicKey","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ MultiEd25519PrivateKey&gt; for MultiEd25519PublicKey","synthetic":false,"types":[]},{"text":"impl From&lt;Ed25519Signature&gt; for MultiEd25519Signature","synthetic":false,"types":[]},{"text":"impl&lt;S, P&gt; From&lt;S&gt; for KeyPair&lt;S, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: From&lt;&amp;'a S&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl From&lt;[u8; 32]&gt; for PrivateKey","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PrivateKey&gt; for PublicKey","synthetic":false,"types":[]},{"text":"impl From&lt;[u8; 32]&gt; for PublicKey","synthetic":false,"types":[]}];
implementors["libra_genesis_tool"] = [{"text":"impl&lt;'_&gt; From&lt;&amp;'_ Command&gt; for CommandName","synthetic":false,"types":[]}];
implementors["libra_github_client"] = [{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Response&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]}];
implementors["libra_jellyfish_merkle"] = [{"text":"impl From&lt;LeafNode&gt; for SparseMerkleLeafNode","synthetic":false,"types":[]},{"text":"impl From&lt;InternalNode&gt; for Node","synthetic":false,"types":[]},{"text":"impl From&lt;InternalNode&gt; for HashMap&lt;Nibble, Child&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;LeafNode&gt; for Node","synthetic":false,"types":[]}];
implementors["libra_json_rpc_client"] = [{"text":"impl From&lt;JsonRpcAsyncClientError&gt; for Error","synthetic":false,"types":[]}];
implementors["libra_json_rpc_types"] = [{"text":"impl From&lt;Error&gt; for JsonRpcError","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for JsonRpcError","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ [u8]&gt; for BytesView","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ Vec&lt;u8&gt;&gt; for BytesView","synthetic":false,"types":[]},{"text":"impl From&lt;Vec&lt;u8&gt;&gt; for BytesView","synthetic":false,"types":[]},{"text":"impl From&lt;AccountAddress&gt; for BytesView","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ AccountAddress&gt; for BytesView","synthetic":false,"types":[]},{"text":"impl From&lt;HashValue&gt; for BytesView","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ KeptVMStatus&gt; for VMStatusView","synthetic":false,"types":[]},{"text":"impl From&lt;Transaction&gt; for TransactionDataView","synthetic":false,"types":[]},{"text":"impl From&lt;AccountRole&gt; for AccountRoleView","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ Script&gt; for ScriptView","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ CurrencyInfoResource&gt; for CurrencyInfoView","synthetic":false,"types":[]}];
implementors["libra_key_manager"] = [{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]}];
implementors["libra_logger"] = [{"text":"impl From&lt;Level&gt; for LevelFilter","synthetic":false,"types":[]}];
implementors["libra_network_address"] = [{"text":"impl From&lt;AddrParseError&gt; for ParseError","synthetic":false,"types":[]},{"text":"impl From&lt;ParseIntError&gt; for ParseError","synthetic":false,"types":[]},{"text":"impl From&lt;CryptoMaterialError&gt; for ParseError","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for ParseError","synthetic":false,"types":[]},{"text":"impl From&lt;Protocol&gt; for NetworkAddress","synthetic":false,"types":[]},{"text":"impl From&lt;SocketAddr&gt; for NetworkAddress","synthetic":false,"types":[]},{"text":"impl From&lt;IpAddr&gt; for Protocol","synthetic":false,"types":[]}];
implementors["libra_network_address_encryption"] = [{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;ParseError&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]}];
implementors["libra_nibble"] = [{"text":"impl From&lt;u8&gt; for Nibble","synthetic":false,"types":[]},{"text":"impl From&lt;Nibble&gt; for u8","synthetic":false,"types":[]}];
implementors["libra_operational_tool"] = [{"text":"impl&lt;'_&gt; From&lt;&amp;'_ Command&gt; for CommandName","synthetic":false,"types":[]}];
implementors["libra_secure_json_rpc"] = [{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;FromHexError&gt; for Error","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ [u8]&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ Vec&lt;u8&gt;&gt; for Bytes","synthetic":false,"types":[]}];
implementors["libra_secure_net"] = [{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]}];
implementors["libra_secure_storage"] = [{"text":"impl From&lt;DecodeError&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;ParseError&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;GitHubStorage&gt; for Storage","synthetic":false,"types":[]},{"text":"impl From&lt;VaultStorage&gt; for Storage","synthetic":false,"types":[]},{"text":"impl From&lt;InMemoryStorageInternal&lt;RealTimeService&gt;&gt; for Storage","synthetic":false,"types":[]},{"text":"impl From&lt;NamespacedStorage&gt; for Storage","synthetic":false,"types":[]},{"text":"impl From&lt;OnDiskStorageInternal&lt;RealTimeService&gt;&gt; for Storage","synthetic":false,"types":[]}];
implementors["libra_swarm"] = [{"text":"impl From&lt;Error&gt; for SwarmLaunchFailure","synthetic":false,"types":[]}];
implementors["libra_types"] = [{"text":"impl&lt;'_&gt; From&lt;&amp;'_ ModuleId&gt; for AccessPath","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ AccountStateBlob&gt; for Vec&lt;u8&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;AccountStateBlob&gt; for Vec&lt;u8&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;Vec&lt;u8&gt;&gt; for AccountStateBlob","synthetic":false,"types":[]},{"text":"impl From&lt;EventKey&gt; for [u8; 24]","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ EventKey&gt; for [u8; 24]","synthetic":false,"types":[]},{"text":"impl From&lt;MempoolStatusCode&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;VMStatus&gt; for TransactionStatus","synthetic":false,"types":[]},{"text":"impl From&lt;Waypoint&gt; for TrustedState","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ ValidatorSet&gt; for ValidatorVerifier","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ ValidatorVerifier&gt; for ValidatorSet","synthetic":false,"types":[]}];
implementors["libra_vault_client"] = [{"text":"impl From&lt;DecodeError&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;CryptoMaterialError&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Response&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]}];
implementors["move_core_types"] = [{"text":"impl From&lt;AccountAddress&gt; for Vec&lt;u8&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ AccountAddress&gt; for Vec&lt;u8&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;AccountAddress&gt; for [u8; 16]","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ AccountAddress&gt; for [u8; 16]","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ AccountAddress&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a IdentStr&gt; for Identifier","synthetic":false,"types":[]},{"text":"impl From&lt;ModuleId&gt; for (AccountAddress, Identifier)","synthetic":false,"types":[]},{"text":"impl From&lt;StatusCode&gt; for u64","synthetic":false,"types":[]}];
implementors["network"] = [{"text":"impl From&lt;NetworkErrorKind&gt; for NetworkError","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for NetworkError","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for NetworkError","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for NetworkError","synthetic":false,"types":[]},{"text":"impl From&lt;PeerManagerError&gt; for NetworkError","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for PeerManagerError","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for PeerManagerError","synthetic":false,"types":[]},{"text":"impl From&lt;Canceled&gt; for PeerManagerError","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for PeerManagerError","synthetic":false,"types":[]},{"text":"impl From&lt;SendError&gt; for PeerManagerError","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for RpcError","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for RpcError","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for RpcError","synthetic":false,"types":[]},{"text":"impl From&lt;SendError&gt; for RpcError","synthetic":false,"types":[]},{"text":"impl From&lt;PeerManagerError&gt; for RpcError","synthetic":false,"types":[]},{"text":"impl From&lt;Canceled&gt; for RpcError","synthetic":false,"types":[]},{"text":"impl From&lt;Elapsed&gt; for RpcError","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Iterator&lt;Item = &amp;'a ProtocolId&gt;&gt; From&lt;T&gt; for SupportedProtocols","synthetic":false,"types":[]},{"text":"impl From&lt;u32&gt; for ConnectionId","synthetic":false,"types":[]}];
implementors["safety_rules"] = [{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]}];
implementors["storage_interface"] = [{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl&lt;D&gt; From&lt;D&gt; for DbReaderWriter <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: 'static + DbReader + DbWriter,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["x_core"] = [{"text":"impl From&lt;Error&gt; for SystemError","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()